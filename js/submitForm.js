let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  let form = e.target;
  let formData = new FormData(form);

  let data = Object.fromEntries(formData.entries());

  // console.log(data);

  let link = document.createElement('a');

  link.href = `mailto:titusrangga142@gmail.com?subject=${data.subject}&body=Selamat siang, nama saya ${data.name}%0D%0ASaya tertarik untuk membahas mengenai job ${data.skill}%0D%0AJika tertarik silahkan hubungi saya melalui email ini. ${data.email} atau melalui nomor telepon ${data.phoneNumber}%0D%0ABerikut pesan saya%0D%0A${data.messages}%0D%0A Sekian, terima kasih.`;

  link.click();
});