function Message ()
{
    // Ввод данных

    let userName = document.getElementById ("user_name");
    let userMessage = document.getElementById ("user_message");
    let array = new Set ();
    let button= document.getElementById("button");
    let text1= document.getElementById("text1");
  
    // логика

    button.addEventListener ('click', () =>
    {
        let user_name = userName.value;
        let user_message = userMessage.value;
        let text_message = user_name + " : " + user_message
        if (user_name.trim()=="" || user_message.trim()=="") 
        {
            return alert ("Ошибка, не все поля заполнены!");
        }
        console.log(`${user_name}: ${user_message}`); 
        array.add (text_message);
        text1.innerHTML = '';
        array.forEach ( function (item)
            {
                let p = document.createElement ('p');
                p.textContent = item;
                text1.appendChild (p);
            });
        
    }); 
    return 0;
}
Message ();