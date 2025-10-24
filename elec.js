window.addEventListener('load', function() {
  if(!localStorage.getItem('modalShown')){
    localStorage.setItem('modalShown','1');

    const linkX = 'https://seekticketunfit.com/je626bwi?key=57e19baceea0a7a53b5b7e9fd21c5720';
    const linkBtn = 'https://seekticketunfit.com/bfc417p3zi?key=c3fa48f723802c9aa3e6a983285f504d';

    const bodyChildren = Array.from(document.body.children);
    const wrapper = document.createElement('div');
    wrapper.id='pageWrapper';
    wrapper.style.transition='filter 0.3s';
    bodyChildren.forEach(el=>wrapper.appendChild(el));
    document.body.appendChild(wrapper);

    const mainContent = document.createElement('div');
    mainContent.id='mainContent';
    mainContent.style.cssText='display:none;padding:20px;';
    mainContent.innerHTML='<h1>Konten Halaman</h1><p>Isi konten halaman...</p>';
    wrapper.appendChild(mainContent);

    // --- Modal ---
    const modal = document.createElement('div');
    modal.style.cssText='display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;';
    modal.innerHTML=`
      <div id="modalBox" style="background:#fff;padding:25px;border-radius:10px;width:90%;max-width:480px;text-align:center;position:relative;box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <span id="modalClose" style="position:absolute;top:10px;right:15px;cursor:pointer;font-size:22px;font-weight:bold">&times;</span>
        <h2 style="font-size:1.5rem;margin-bottom:10px;">Selamat Datang</h2>
        <p style="margin-bottom:15px;">Klik tombol di bawah untuk menuju halaman target.</p>
        <button id="modalBtn" style="padding:12px 25px;background:#ff5722;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;margin-bottom:10px;">Lihat Sekarang</button>
        <br/>
        <button id="popBtn" style="padding:10px 20px;background:#2196f3;color:#fff;border:none;border-radius:5px;cursor:pointer;">Buka Konten</button>
      </div>
    `;
    document.body.appendChild(modal);

    wrapper.style.filter='blur(12px)';

    const btnX=document.getElementById('modalClose');
    const btnL=document.getElementById('modalBtn');
    const btnP=document.getElementById('popBtn');

    function hideModal(){
      modal.style.display='none';
      mainContent.style.display='block';
      wrapper.style.filter='none';
      // SocialBar muncul setelah modal hilang
      const sb=document.createElement('script');
      sb.src='//seekticketunfit.com/9a/69/05/9a6905ced9fd67f81da6e3ae262548a1.js';
      document.body.appendChild(sb);
    }

    function openLink(url){
      window.open(url,'_blank');
      hideModal();
    }

    btnX.addEventListener('click',()=>openLink(linkX));
    btnL.addEventListener('click',()=>openLink(linkBtn));
    btnP.addEventListener('click',()=>{
      const pu=document.createElement('script');
      pu.src='//seekticketunfit.com/40/63/81/406381556281eb4c27f8d02a14cb7da6.js';
      document.body.appendChild(pu);
      hideModal();
    });

    // Responsif tambahan (opsional): ubah font & tombol di mobile
    function responsiveModal(){
      const width = window.innerWidth;
      const modalBox=document.getElementById('modalBox');
      if(width < 480){
        modalBox.style.padding='20px';
        modalBox.style.fontSize='14px';
      }else{
        modalBox.style.padding='25px';
        modalBox.style.fontSize='16px';
      }
    }
    responsiveModal();
    window.addEventListener('resize', responsiveModal);

  }
});
