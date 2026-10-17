document.addEventListener("DOMContentLoaded", function () {
  const changeTextButton = document.querySelector("#change-text");
  const changeThemeButton = document.querySelector("#change-theme");
  const profileDescription = document.querySelector("#profile-description");
  const interactionStatus = document.querySelector("#interaction-status");
  const currentYear = document.querySelector("#current-year");

  const originalDescription =
    "Saya mahasiswa Sistem Informasi yang tertarik dengan teknologi, pengembangan web, dan desain digital. Saya senang belajar hal baru dan mengembangkan keterampilan melalui proyek sederhana.";

  const alternateDescription =
    "Saya percaya bahwa setiap proses belajar adalah kesempatan untuk berkembang. Saya ingin terus mengasah kemampuan, mencoba tantangan baru, dan membuat karya digital yang bermanfaat.";

  let alternateTextIsActive = false;

  changeTextButton.addEventListener("click", function () {
    alternateTextIsActive = !alternateTextIsActive;

    profileDescription.textContent = alternateTextIsActive
      ? alternateDescription
      : originalDescription;

    interactionStatus.textContent = alternateTextIsActive
      ? "Deskripsi profil berhasil diubah!"
      : "Deskripsi profil kembali ke teks awal.";
  });

  // Mengganti tema terang/gelap menggunakan classList.toggle().
  changeThemeButton.addEventListener("click", function () {
    const darkThemeIsActive = document.body.classList.toggle("dark-theme");

    changeThemeButton.innerHTML = darkThemeIsActive
      ? '<span aria-hidden="true">☀</span> Tema Terang'
      : '<span aria-hidden="true">◐</span> Ganti Tema';

    interactionStatus.textContent = darkThemeIsActive
      ? "Tema gelap aktif."
      : "Tema terang aktif.";
  });

  // Tahun footer otomatis mengikuti tahun perangkat.
  currentYear.textContent = new Date().getFullYear();
});
