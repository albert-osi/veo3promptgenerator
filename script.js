document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');

    generateBtn.addEventListener('click', generatePrompt);
    changeStyleBtn.addEventListener('click', handleStyleChange);

    function generatePrompt() {
        // 1. Get all input values
        const judulScene = getVal('judulScene');
        const deskripsiKarakter = getVal('deskripsiKarakter');
        const suaraKarakter = getVal('suaraKarakter');
        const aksiKarakter = getVal('aksiKarakter');
        const ekspresiKarakter = getVal('ekspresiKarakter');
        const latarTempatWaktu = getVal('latarTempatWaktu');
        const detailVisual = getVal('detailVisual');
        const gerakanKamera = getVal('gerakanKamera');
        const suasanaKeseluruhan = getVal('suasanaKeseluruhan');
        const suaraLingkungan = getVal('suaraLingkungan');
        const dialogKarakter = getVal('dialogKarakter');
        const negativePrompt = getVal('negativePrompt');

        // 2. Develop and structure the Indonesian prompt
        const promptIndonesia = `
**Judul Scene:** ${judulScene}.

**Deskripsi Karakter Inti:** ${deskripsiKarakter}.

**Detail Suara Karakter:** ${suaraKarakter}.

**Aksi Karakter:** Karakter terlihat ${aksiKarakter}.

**Ekspresi Karakter:** ${ekspresiKarakter}.

**Latar Tempat & Waktu:** ${latarTempatWaktu}.

**Detail Visual Tambahan:**
Gerakan Kamera: Menggunakan teknik ${gerakanKamera} untuk menciptakan nuansa sinematik yang mendalam.
${detailVisual}.

**Suasana Keseluruhan:** Suasana yang ingin dibangun adalah ${suasanaKeseluruhan}.

**Suara Lingkungan/Ambience:** ${suaraLingkungan}.

**Dialog Karakter:** ${dialogKarakter}.

**Negative Prompt:** ${negativePrompt}.
`;

        // 3. Translate to English (simulated for now, direct mapping)
        // In a real scenario, this would use a translation API
        const promptInggris = `
**Scene Title:** A cinematic shot of "${judulScene}".

**Core Character Description:** ${deskripsiKarakter}.

**Character Voice Details:** ${suaraKarakter}.

**Character Action:** The character is seen ${aksiKarakter}.

**Character Expression:** ${ekspresiKarakter}.

**Setting & Time:** ${latarTempatWaktu}.

**Additional Visual Details:**
Camera Movement: A ${gerakanKamera} is used to create a deep cinematic feel.
${detailVisual}.

**Overall Atmosphere:** The desired atmosphere is ${suasanaKeseluruhan}.

**Environmental Sound/Ambience:** ${suaraLingkungan}.

**Character Dialogue:** DIALOG in Indonesian: ${dialogKarakter.replace("DIALOG dalam Bahasa Indonesia: Karakter berkata:", "Character says:")}.

**Negative Prompt:** ${negativePrompt}.
`;

        // 4. Display the prompts
        document.getElementById('outputIndonesia').value = promptIndonesia.trim();
        document.getElementById('outputInggris').value = promptInggris.trim();
    }

    function handleStyleChange() {
        const input = getVal('styleInput').toLowerCase();

        if (input.startsWith('ganti style:')) {
            const colors = input.replace('ganti style:', '').split(',').map(c => c.trim());
            if (colors.length === 3) {
                const [color1, color2, color3] = colors;
                const root = document.documentElement;
                root.style.setProperty('--bg-color', color1);
                root.style.setProperty('--primary-color', color2);
                root.style.setProperty('--accent-color', color3);
                // Assuming text colors should be readable on the new backgrounds.
                // A more advanced version might calculate contrast and set text color accordingly.
                root.style.setProperty('--text-color', '#ffffff'); // Default to white
                root.style.setProperty('--input-bg-color', '#21252b'); // Default
            } else {
                alert("Mohon masukkan 3 warna yang dipisahkan koma (contoh: ganti style: #000000, #333333, #ffffff)");
            }
        } else if (input.startsWith('ganti judul:')) {
            const newTitle = input.replace('ganti judul:', '').trim();
            document.getElementById('main-title').textContent = newTitle;
        } else {
            alert("Perintah tidak dikenali. Gunakan 'ganti style: [warna1], [warna2], [warna3]' atau 'ganti judul: [judul baru]'.");
        }
    }

    function getVal(id) {
        return document.getElementById(id).value;
    }
}); 