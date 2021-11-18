var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var checkName = /^[A-Za-z0-9_]{1,20}$/;
var formName = document.querySelector('.form-name');
var formEmail = document.querySelector('.form-email');
var formMess = document.querySelector('.form-mess');

// ham check xem user da dien thong tin chua
function checkNull(txt) {
    if (txt.value.length == 0)
        return true;
    else
        return false;
}

//ham so sanh xem nguoi nhap da nhap dung theo yeu cau chua 
function stringMatch(txt, reg) {
    return reg.test(txt.value);
}

//ham focus
function focusFunc1() {
    formName.classList.remove('error');
    document.querySelector('.name-null').classList.add('hidden');
    document.querySelector('.name-retype').classList.add('hidden');
}

function focusFunc2() {
    formEmail.classList.remove('error');
    document.querySelector('.email-null').classList.add('hidden');
    document.querySelector('.email-retype').classList.add('hidden');
}

function focusFunc3() {
    formMess.classList.remove('error');
    document.querySelector('.message-null').classList.add('hidden');
}

function nullEffect(form) {
    form.classList.add('error');
}

//ham validate form 
function validForm(f) {
    if (checkNull(f.name)) { // f.name la du lieu nguoi dung nhap 
        //check ten null k
        nullEffect(formName);   // formName lay ptu html co class la form-name
        document.querySelector('.name-null').classList.remove('hidden');
    }
    else if (!stringMatch(f.name, checkName)) {
        //check xem ten hop le hay khong
        nullEffect(formName);
        document.querySelector('.name-retype').classList.remove('hidden');
    }
    else if (checkNull(f.email)) {
        //check xem user nhap email chua
        nullEffect(formEmail);
        document.querySelector('.email-null').classList.remove('hidden');
    }
    else if (!stringMatch(f.email, checkEmail)) {
        // check xem email hop le khong
        nullEffect(formEmail);
        document.querySelector('.email-retype').classList.remove('hidden');
    }
    else if (checkNull(f.message)) {
        // xem nguoi dung nhap message chua
        nullEffect(formMess);
        document.querySelector('.message-null').classList.remove('hidden');
    }
    else alert("Post thành công");
}

// //ham validate form 
// function validForm(f) {
//     if (checkNull(f.name))
//         alert("Vui long nhap ten");
//     else if (!stringMatch(f.name, checkName))
//         alert("Ten khong hop le");
//     else if (checkNull(f.email))
//         alert("Vui long nhap email")
//     else if (!stringMatch(f.email, checkEmail))
//         alert("email khong hop le");
//     else if (checkNull(f.message))
//         alert("Vui long nhap message");
//     else alert("Post thanh cong");
// }