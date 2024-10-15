document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

let isEnglish = false;

function toggleLanguage() {
    if (isEnglish) {
        document.getElementById('titulo').textContent = 'Olá, Eu Sou João Victor Poloniato Buss';
        document.getElementById('descricao').textContent = 'João Victor Poloniato Buss é um desenvolvedor júnior com expertise em tecnologias como React.js, Next.js, JavaScript, TypeScript, Python, C#, .NET, e bancos de dados como MySQL, MariaDB e MongoDB. Também trabalha com PHP e Node.js. Atualmente, João é analista de dados, apaixonado por automação e tecnologia, e está cursando Sistemas de Informação na Unemat. Seus projetos vão de sistemas de gestão de clientes a convites de casamento personalizados. Explore mais no perfil GitHub de João.';
    } else {
        document.getElementById('titulo').textContent = 'Hello, I Am João Victor Poloniato Buss';
        document.getElementById('descricao').textContent = 'João Victor Poloniato Buss is a junior developer with expertise in technologies such as React.js, Next.js, JavaScript, TypeScript, Python, C#, .NET, and databases like MySQL, MariaDB, and MongoDB. He also works with PHP and Node.js. Currently a data analyst, João is passionate about automation and technology, pursuing a degree in Information Systems at Unemat. His projects range from client management systems to personalized wedding invitations. Explore more on João\'s GitHub profile.';
    }
    isEnglish = !isEnglish;
}


function sendWhatsAppMessage() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    alert("Mensagem enviada com sucesso!");

    const whatsappNumber = '5566996837095';
    const text = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappLink, '_blank');
}


function sendEmail() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const subject = `Mensagem de ${nome}`;
    const body = `Olá,\n\nVocê recebeu uma nova mensagem:\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;
    const mailtoUrl = `mailto:poloniato155@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl, '_blank');
}