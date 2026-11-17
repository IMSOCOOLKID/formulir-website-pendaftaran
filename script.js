// Toggle dropdown menu
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

if (menuButton && dropdownMenu) {
  menuButton.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
    const isOpen = dropdownMenu.classList.contains('show');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !menuButton.contains(event.target)) {
      dropdownMenu.classList.remove('show');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Form pendaftaran (demo, belum terhubung ke database/server)
const registrationForm = document.getElementById('registrationForm');
const formStatus = document.getElementById('formStatus');

if (registrationForm && formStatus) {
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const pilihanMinat = registrationForm.querySelectorAll('input[name="minat"]:checked');

    if (pilihanMinat.length === 0) {
      formStatus.textContent = 'Silakan pilih minimal satu minat dan keahlian.';
      const minatSection = registrationForm.querySelector('.interest-fieldset');
      if (minatSection) minatSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    formStatus.textContent = 'Pendaftaran berhasil diselesaikan (demo). Terima kasih, ' + nama + '!';
    registrationForm.reset();
  });

  registrationForm.addEventListener('reset', function () {
    formStatus.textContent = '';
  });
}
