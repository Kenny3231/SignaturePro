document.addEventListener("DOMContentLoaded", function() {
  const signatureForm = document.getElementById("signatureForm");
  const signaturePreview = document.getElementById("signaturePreview");

  signatureForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const fonction = document.getElementById("fonction").value;      
      const email = document.getElementById("email").value;
      const fixe = document.getElementById("fixe").value;
      const portable = document.getElementById("portable").value;
      const template = document.getElementById("template").value;

      let signatureHTML = '';


      // Générer la signature au format HTML
      switch (template) {
        case "Classic":
            signatureHTML = `
          <table>   
          <tbody>
            <td style="padding-right: 15pt;padding-left: 15pt">
                <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                    <tr>
                        <td>
                            <img src="Img/Logo MGI déposé INPI.png">
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: center; padding-top: 10pt">
                            <a href="https://www.mgi.fr" target="_blank" style="color:#3388cc;text-decoration:none">www.mgi.fr</a>
                        </td>
                    </tr>
                </table>
            </td>
            <td valign="top" style="width:350px; border-left:solid #4d4d4d 1.0pt; padding-left:15pt; font-size:8.0pt; font-family:verdana,sans-serif">    
                <b><span style="color:#4d4d4d; font-size: 10pt">${prenom} ${nom}</span></b>
                <span style="color:#4d4d4d; font-size: 9pt"><br>${fonction}<br></span>
                <table cellspacing="0" cellpadding="0" border="0" style=" font-size:8.0pt; font-family:verdana,sans-serif">
                    <tr>
                        <td style="padding-bottom: 5pt">
                            <span style="">
                                <a href="mailto:${email}" style="color:#3388cc;text-decoration:none">${email}</a>
                            </span>
                        </td>
                    </tr>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                    <tr>
                        <td style="padding-right:20pt">
                            <span style="color:#4d4d4d">Tél. :</span>
                            <span style="text-decoration:none;letter-spacing:-0.5px">
                            ${fixe}
                            </span>
                        </td>
                        <td>
                            <span style="color:#4d4d4d">Port. :</span>
                            <spanstyle="#3388cc;text-decoration:none;letter-spacing:-0.5px">
                            ${portable}
                            </span>
                        </td>
                    </tr>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                    <tr>
                        <td style="padding-top: 10pt">
                            <b><span style="color:#4d4d4d">MGI France SA&nbsp;:</span></b>
                            <span style="color:#4d4d4d"> 11 rue de Téhéran - 75008 Paris</span>
                            <br>
                            <b><span style="color:#4d4d4d">MGI Sud-Ouest SAS&nbsp;:</span></b>
                            <span style="color:#4d4d4d"> 2 rue Paul Mesplé - 31100 Toulouse</span> 
                            <br>
                            <b><span style="color:#4d4d4d">MGI Suisse SA&nbsp;:</span></b>
                            <span style="color:#4d4d4d"> 5 avenue du Rothorn - CH3960 Sierre</span>
                    
                        </td>
                    </tr>
                </table>    
              </td>
          </tbody>
        </table>
        `;
    break;
    case "Octobre Rose":
      signatureHTML = `
      <table>   
      <tbody>
        <td style="padding-right: 15pt;padding-left: 15pt">
            <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                <tr>
                    <td>
                        <img src="Img/OctobreRose.png">
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; padding-top: 10pt">
                        <a href="https://www.ligue-cancer.net/octobre-rose" target="_blank" style="color:#D5488B;text-decoration:none">Soutient Octobre Rose</a>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; padding-top: 10pt">
                        <a href="https://www.mgi.fr" target="_blank" style="color:#D5488B;text-decoration:none">www.mgi.fr</a>
                    </td>
                </tr>
            </table>
        </td>
        <td valign="top" style="width:350px; border-left:solid #D5488B 1.0pt; padding-left:15pt; font-size:8.0pt; font-family:verdana,sans-serif">    
            <b><span style="color:#D5488B; font-size: 10pt">${prenom} ${nom}</span></b>
            <span style="color:#D5488B; font-size: 9pt"><br>${fonction}<br></span>
            <table cellspacing="0" cellpadding="0" border="0" style=" font-size:8.0pt; font-family:verdana,sans-serif">
                <tr>
                    <td style="padding-bottom: 5pt">
                        <span style="">
                            <a href="mailto:${email}" style="color:#D5488B;text-decoration:none">${email}</a>
                        </span>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                <tr>
                    <td style="padding-right:20pt">
                        <span style="color:#D5488B">Tél. :</span>
                        <span style="color:#D5488B;text-decoration:none;letter-spacing:-0.5px">
                        ${fixe}
                        </span>
                    </td>
                    <td>
                        <span style="color:#D5488B">Port. :</span>
                        <span style="color:#D5488B;text-decoration:none;letter-spacing:-0.5px">
                        ${portable}
                        </span>
                    </td>
                </tr>
            </table>
            <table cellspacing="0" cellpadding="0" border="0" style="margin:0 5px 5px 0;display:inline; font-size:8.0pt; font-family:verdana,sans-serif">
                <tr>
                    <td style="padding-top: 10pt">
                        <b><span style="color:#D5488B">MGI France SA&nbsp;:</span></b>
                        <span style="color:#D5488B"> 11 rue de Téhéran - 75008 Paris</span>
                        <br>
                        <b><span style="color:#D5488B">MGI Sud-Ouest SAS&nbsp;:</span></b>
                        <span style="color:#D5488B"> 2 rue Paul Mesplé - 31100 Toulouse</span> 
                        <br>
                        <b><span style="color:#D5488B">MGI Suisse SA&nbsp;:</span></b>
                        <span style="color:#D5488B"> 5 avenue du Rothorn - CH3960 Sierre</span>
                
                    </td>
                </tr>
            </table>    
          </td>
      </tbody>
    </table>
        `;
        break;
        default:
          signatureHTML = '<p>Modèle non valide</p>';
  }

  // Afficher la signature dans la div signaturePreview
  signaturePreview.innerHTML = signatureHTML;
});
});
