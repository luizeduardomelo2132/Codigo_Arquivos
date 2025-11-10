 const predefined = [
      {q: 'Como faço para agendar uma consulta?', a: 'Você pode agendar aqui mesmo pelo chat — vou pedir algumas informações (nome, data, horário e tipo de consulta). Quer começar agora?', follow: ['Sim, começar agendamento','Quais tipos de consulta?'] },
      {q: 'Quais são os tipos de consulta?', a: 'Temos: Consulta Geral (20min), Retorno (15min) e Teleconsulta (15min). Qual prefere?', follow: ['Consulta Geral','Retorno','Teleconsulta']},
      {q: 'Quais são os horários disponíveis?', a: 'Atendemos de segunda a sexta, das 09:00 às 18:00. Após escolher a data, mostrarei horários livres (simulados).', follow: []},
      {q: 'Como cancelar uma consulta?', a: 'Atualmente o cancelamento pode ser feito entrando em contato com a recepção. Aqui você pode ver suas consultas e anotar o código para ligar.', follow: ['Ver minhas consultas']},
      {q: 'Qual o preço da consulta?', a: 'Os valores variam conforme o tipo: Consulta Geral R$150, Retorno R$80, Teleconsulta R$120. Deseja agendar ou mais informações?', follow: ['Agendar Consulta']}
    ];


let scheduleState = null; 
    const appointmentsKey = 'chatbot_appointments_v1';

   
    const el = id => document.getElementById(id);
    const messagesEl = el('messages');

    function addMessage(text, who='bot'){
      const div = document.createElement('div');
      div.className = 'msg ' + (who==='bot' ? 'bot' : 'user');
      div.innerHTML = text;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    
    function renderQList(){
      const qList = el('qList'); qList.innerHTML='';
      predefined.forEach(item =>{
        const d = document.createElement('div'); d.className='q-item'; d.tabIndex=0;
        d.textContent = item.q;
        d.onclick = () => handleUserText(item.q);
        d.onkeypress = e => { if(e.key === 'Enter') handleUserText(item.q) };
        qList.appendChild(d);
      })
    }

    
    function findPredefinedByQ(text){
      return predefined.find(p => p.q.toLowerCase() === text.toLowerCase()) || null;
    }

    
    function handleUserText(txt){
      if(!txt) return;
      addMessage(escapeHtml(txt), 'user');
      processText(txt.trim());
    }

    function processText(txt){
    
      if(scheduleState){
        handleSchedulingFlow(txt);
        return;
      }

      const match = findPredefinedByQ(txt);
      if(match){
     
        let html = `<div>${escapeHtml(match.a)}</div>`;
        if(match.follow && match.follow.length){
          html += '<div class="meta">Sugestões:</div><div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">'
                 + match.follow.map(f=>`<button class="chip" onclick="handleUserText('${escapeJs(f)}')">${escapeHtml(f)}</button>`).join('')
                 + '</div>';
        }
        addMessage(html,'bot');

        
        const startKeywords = ['agendar','agendamento','agendar consulta','agendar consulta agora','agendar consulta?','agendar consulta .'];
        if(txt.toLowerCase().includes('agend')){
          startScheduling();
        }
        return;
      }

      
      addMessage('Desculpe, não entendi. Posso ajudar a <strong>agendar uma consulta</strong> ou listar perguntas comuns. Deseja agendar?', 'bot');
    }

    
    function startScheduling(){
      scheduleState = {step: 'nome', data: {}};
      addMessage('Ótimo — vamos agendar! Primeiro, qual é o seu nome completo?', 'bot');
    }

    function handleSchedulingFlow(txt){
      const step = scheduleState.step;
      if(step === 'nome'){
        scheduleState.data.nome = txt;
        scheduleState.step = 'tipo';
        addMessage('Qual o tipo de consulta? (Consulta Geral / Retorno / Teleconsulta)', 'bot');
        return;
      }
      if(step === 'tipo'){
        const tipo = txt.toLowerCase();
        if(!['consulta geral','retorno','teleconsulta'].some(t=>tipo.includes(t.split(' ')[0]))){
          addMessage('Por favor escolha uma das opções: Consulta Geral, Retorno, Teleconsulta.', 'bot');
          return;
        }
        scheduleState.data.tipo = txt;
        scheduleState.step = 'data';
        addMessage('Perfeito. Escolha a data (formato YYYY-MM-DD) — por exemplo: 2025-11-20', 'bot');
        return;
      }
      if(step === 'data'){
     
        if(!/^\d{4}-\d{2}-\d{2}$/.test(txt)){
          addMessage('Formato inválido. Use YYYY-MM-DD (ex: 2025-11-20).', 'bot'); return;
        }
        scheduleState.data.data = txt;
        scheduleState.step = 'hora';
        addMessage('Agora o horário (HH:MM) — exemplo: 14:30. Atendemos entre 09:00 e 18:00.', 'bot');
        return;
      }
      if(step === 'hora'){
        if(!/^\d{2}:\d{2}$/.test(txt)) { addMessage('Formato inválido. Use HH:MM (ex: 14:30).', 'bot'); return; }
        scheduleState.data.hora = txt;
        scheduleState.step = 'confirm';
        const d = scheduleState.data;
        const summary = `<div class="confirm"><strong>Resumo do agendamento</strong><div class="meta">Nome: ${escapeHtml(d.nome)}<br>Tipo: ${escapeHtml(d.tipo)}<br>Data: ${escapeHtml(d.data)}<br>Hora: ${escapeHtml(d.hora)}</div></div>`;
        addMessage(summary + '<div style="margin-top:8px"><button class="chip" onclick="confirmScheduling(true)">Confirmar</button><button class="chip" onclick="confirmScheduling(false)">Cancelar</button></div>','bot');
        return;
      }
    }

    function confirmScheduling(ok){
      if(!scheduleState) return;
      if(ok){
        const appts = JSON.parse(localStorage.getItem(appointmentsKey) || '[]');
        const id = Math.random().toString(36).slice(2,9).toUpperCase();
        const entry = {...scheduleState.data, id, createdAt: new Date().toISOString()};
        appts.push(entry);
        localStorage.setItem(appointmentsKey, JSON.stringify(appts));
        addMessage(`<strong>Agendamento confirmado!</strong><div class="meta">Código: ${id}. Guarde este código para alterações/cancelamentos.</div>`, 'bot');
      } else {
        addMessage('Agendamento cancelado. Se quiser, podemos tentar novamente.', 'bot');
      }
      scheduleState = null;
    }


    function listAppointments(){
      const appts = JSON.parse(localStorage.getItem(appointmentsKey) || '[]');
      if(!appts.length){ addMessage('Você não tem consultas agendadas.', 'bot'); return; }
      let html = '<div><strong>Suas consultas:</strong></div>' + appts.map(a=>`<div style="margin-top:8px;padding:8px;border-radius:8px;background:#fff"><div class="meta">Código: ${a.id} — ${a.tipo} — ${a.data} ${a.hora}</div><div style="font-size:13px;margin-top:6px">Nome: ${escapeHtml(a.nome)}</div></div>`).join('');
      addMessage(html,'bot');
    }

    function escapeHtml(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
    function escapeJs(s){ return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' '); }


    el('sendBtn').onclick = ()=>{ const v = el('userInput').value.trim(); if(!v) return; el('userInput').value=''; handleUserText(v);} ;
    el('userInput').addEventListener('keydown', e=>{ if(e.key === 'Enter'){ e.preventDefault(); el('sendBtn').click(); } });

    el('startScheduling').onclick = ()=> { startScheduling(); };
    el('listAppointments').onclick = ()=> { listAppointments(); };
    el('clearChat').onclick = ()=> { messagesEl.innerHTML=''; addMessage('Chat limpo. Como posso ajudar?','bot'); };

  
    renderQList();
    addMessage('Olá! Eu sou o assistente de agendamento. Clique em uma pergunta à esquerda, escreva sua pergunta ou pressione "Agendar consulta" para começar.','bot');

   
    window.handleUserText = handleUserText;
    window.confirmScheduling = confirmScheduling;