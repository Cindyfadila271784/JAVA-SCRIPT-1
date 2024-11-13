const daftarKaryawan = [
    {
      nama:"Devyn Ramirez",
      no: "10",
      masa: "10",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Harmony Duncan",
      no: "11",
      masa: "5",
      gaji: "Rp. 4.000.000"
     
    },
    {
      nama:  "Clarissa Burgess",
      no: "12",
      masa: "8",
      gaji: "Rp. 7.000.000"
     
    },
    {
      nama:  "Reilly Blanchard",
      no: "13",
      masa: "7",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Zion Brooks",
      no: "14",
      masa: "4",
      gaji: "Rp. 4.000.000"
      
    },
    {
      nama:  "Kristin Mcdaniel",
      no: "15",
      masa: "10",
      gaji: "Rp. 7.000.000"
        
    },  
    {
      nama:  "Cindy Chase",
      no: "16",
      masa: "10",
      gaji: "Rp. 7.000.000"
      
    },
    {
      nama: "Kristin Mcdaniel",
      no: "17",
      masa: "9",
      gaji: "Rp. 7.000.000"
       
    },
    {
      nama: "Macey Sanford",
      no: "18",
      masa: "8",
      gaji: "Rp. 7.000.000"
    },
    {
      nama: "Alfredo Faulkner",
      no: "19",
      masa: "7",
      gaji: "Rp. 7.000.000"
    },
  ]

let mode = 'tambah'

const tampilkanKaryawan = () => {
  // mengakses dom
  const tblKaryawan = document.getElementById("tblKaryawan");
  tblKaryawan.innerHTML = `<tr>
                              <th>No</th>
                              <th>Nama</th>
                              <th>No induk</th>
                              <th>Masa</th>
                              <th>Gaji</th>
                              <th>Edit</th>
                              <th>Hapus</th>
                            </tr>`;
  // menambh isi

  for (let idx in daftarKaryawan) {
    console.log(`${parseInt(idx) + 1}. ${daftarKaryawan[idx].nama} masa kerja ${daftarKaryawan[idx].masa} Induk ${daftarKaryawan[idx].no} gaji karyawan ${daftarKaryawan[idx].gaji}`);

    tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].no}</td><td>${daftarKaryawan[idx].masa}</td><td>${daftarKaryawan[idx].gaji}<td><button class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td></td><td><buton class= "btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`;
  }
};

const tambahKaryawan = () => {
  const nama = document.getElementById("textNama").value;
  const masa = document.getElementById("textMasa").value;
  const no = document.getElementById("textInduk").value;
  const gaji = document.getElementById("textGaji").value;

  const karyawanBaru = {
    nama: nama,
    no: no,
    masa: masa,
    gaji: gaji,
  };

  // jika tambah
  if (mode == "tambah") {
    daftarKaryawan.push(karyawanBaru);
  } else {
    // jik edit
    daftarKaryawan[mode] = karyawanBaru;
  }

  document.getElementById("textNama").value = "";
  document.getElementById("textMasa").value = "";
  document.getElementById("textInduk").value = "";
  document.getElementById("textGaji").value = "";
  mode = "tambah";

  tampilkanKaryawan();
};

const cariIndex = (nama) => {
  for (let i = 0; i < daftarKaryawan.length; i++) {
    if (daftarKaryawan[i].nama == nama) {
      return i
    }
  }
}

const hapusKaryawan = (target) => {
  const indexDihapus = cariIndex(target);
  if (indexDihapus !== -1) {
    daftarKaryawan.splice(indexDihapus, 1);
    tampilkanKaryawan();
  }
};

const editKaryawan = (target) => {
  const indexEdit = cariIndex(target)
 
  console.log(target)
  console.log(indexEdit)
  console.log(daftarKaryawan[indexEdit])

  const karyawanDiedit = daftarKaryawan[indexEdit]

    document.getElementById('textNama').value = karyawanDiedit.nama
    document.getElementById('textMasa').value = karyawanDiedit.masa
    document.getElementById('textInduk').value = karyawanDiedit.indk
    document.getElementById('textGaji').value = karyawanDiedit.gaji

    mode = indexEdit

  }

  const batalEdit = (target) => {
    document.getElementById('textNama').value = ""
    document.getElementById('textMasa').value = ""
    document.getElementById('textInduk').value = ""
    document.getElementById('textGaji').value = ""
    
    mode = 'tambah'
  }