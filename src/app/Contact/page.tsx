

export default function Contact() {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        var Name = name?.textContent;
        var Email = email?.textContent;
        var Message = message?.textContent;
    
        //emailjs.sendForm('service_0q5w1zq', 'template_9v8g0gq', e.target, 'user_4m1VZJkQ8Q6T5b9Y6Q8jy')
        
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div id="contact" className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <form id="contact_section">
                    <div>
                        <input type="text" id="name" name="name" placeholder="Name" />
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea id="message" name="message" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" onSubmit={() => {
                        fetch('https://api.emailjs.com/api/v1.0/email/send', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                service_id: 'service_0q5w1zq',
                                template_id: 'template_9v8g0gq',
                                user_id: 'user_4m1VZJkQ8Q6T5b9Y6Q8jy',
                                template_params: {
                                    'name': {Name},
                                    'email': {Email},
                                    'message': {Message}
                        }
                    })}).then((response) => response.json()) 
                        .then((result) => {
                            alert("Message Sent successfully to " + result.Name);
                          }, (error) => {
                              alert("Message not sent due to " + error.text);
                          });
                      }}
                    >Send</button>
                </form>
            </div>
        </main>
    )   
}

