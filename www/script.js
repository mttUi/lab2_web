document.getElementById("conferenceForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    
    
    const formData = new FormData(this);
    
    
    const birthYear = parseInt(formData.get('birthYear'));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    
    let output = '';
    
    
    output += `
        <div class="result-item">
            <span class="result-label">👤 ФИО:</span>
            <span class="result-value">${formData.get('name')}</span>
        </div>
    `;
    
    
    output += `
        <div class="result-item">
            <span class="result-label">🎂 Год рождения:</span>
            <span class="result-value">${birthYear} (${age} лет)</span>
        </div>
    `;
    
    
    const section = formData.get('section');
    const sectionNames = {
        'ai': 'Искусственный интеллект и машинное обучение',
        'web': 'Веб-технологии и разработка',
        'data': 'Наука о данных и аналитика',
        'cyber': 'Кибербезопасность',
        'mobile': 'Мобильная разработка',
        'cloud': 'Облачные технологии'
    };
    output += `
        <div class="result-item">
            <span class="result-label">📚 Секция:</span>
            <span class="result-value">${sectionNames[section]}</span>
        </div>
    `;
    
    
    const certificate = formData.get('certificate') === 'yes';
    output += `
        <div class="result-item">
            <span class="result-label">📜 Сертификат:</span>
            <span class="result-value">${certificate ? '✅ Требуется' : '❌ Не требуется'}</span>
        </div>
    `;
    
    
    const participation = formData.get('participation');
    const participationNames = {
        'online': '💻 Онлайн-участие',
        'offline': '🏢 Очное участие',
        'hybrid': '🔀 Гибридный формат'
    };
    output += `
        <div class="result-item">
            <span class="result-label">🎯 Форма участия:</span>
            <span class="result-value">${participationNames[participation]}</span>
        </div>
    `;
    
    
    let additionalInfo = '';
    if (age < 18) {
        additionalInfo = '⚠️ Для участников младше 18 лет требуется согласие родителей';
    } else if (age > 60) {
        additionalInfo = '🌟 Спасибо за ваш опыт и участие!';
    }
    
    if (certificate && participation === 'online') {
        additionalInfo += (additionalInfo ? '<br>' : '') + '📧 Сертификат будет отправлен на email';
    }
    
    if (additionalInfo) {
        output += `
            <div class="result-item" style="border-top: 2px solid rgba(255,255,255,0.5); margin-top: 15px; padding-top: 15px;">
                <span class="result-label">ℹ️ Дополнительно:</span>
                <span class="result-value" style="font-size: 12px;">${additionalInfo}</span>
            </div>
        `;
    }
    
    
    document.getElementById("resultContent").innerHTML = output;
    document.getElementById("result").style.display = 'block';
    
    
    document.getElementById("result").scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    
    const name = formData.get('name');
    const sectionName = sectionNames[section];
    const partName = participationNames[participation];
    
    let alertMessage = `Спасибо, ${name}!\n\n`;
    alertMessage += `Вы зарегистрированы в секции: ${sectionName}\n`;
    alertMessage += `Форма участия: ${partName}\n`;
    alertMessage += `Сертификат: ${certificate ? 'будет подготовлен' : 'не требуется'}\n\n`;
    alertMessage += `Подробная информация отображена ниже.`;
    
    alert(alertMessage);
});


document.getElementById('birthYear').addEventListener('blur', function() {
    const year = parseInt(this.value);
    const currentYear = new Date().getFullYear();
    
    if (year && (year < 1900 || year > currentYear)) {
        alert('Пожалуйста, введите корректный год рождения (1900-' + currentYear + ')');
        this.focus();
    }
});


document.getElementById('conferenceForm').addEventListener('change', function() {
    
});