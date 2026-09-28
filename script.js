document.addEventListener('DOMContentLoaded',()=>{
const form=document.getElementById('bookingForm');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
const name=document.getElementById('name').value;
const phone=document.getElementById('phone').value;
const days=document.getElementById('days').value;
if(!name||!phone||!days){alert('Please fill all fields');return;}
alert('Booking Successful!');
this.reset();
window.location.href='index.html';
});
}
});