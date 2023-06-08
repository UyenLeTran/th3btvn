const email = document.getElementById("emailInput");
const pass = document.getElementById("passwordInput");
const result = document.getElementById("result");
const btn = document.getElementById("btnSignIn");
const form = document.forms.input;
form.addEventListener("submit",function(e){
    let s = email.value;
    let t= pass.value;
   
    if((s=="") || (t=="")){
        result.innerHTML ="<p style='color:red'>Xin vui lòng điền đầy đủ thông tin nhe</p>";
    } else if((s!="admin") || (t!="password")){
        result.innerHTML ="<p style='color:red'>Sai password hoặc mật khẩu</p>";
    }else if((s=="admin") && (t=="password")){
        window.location = ("../index.html");
    }
    e.preventDefault();
})
