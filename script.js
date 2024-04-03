document.addEventListener("DOMContentLoaded", function() {
  const signatureForm = document.getElementById("signatureForm");
  const signaturePreview = document.getElementById("signaturePreview");

  signatureForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const fonction = document.getElementById("fonction").value;      
      // const email = document.getElementById("email").value;
      const fixe = document.getElementById("fixe").value;
      const portable = document.getElementById("portable").value;     
      const DefaultTelCheckbox = document.getElementById("DefaultTel");
      const template = document.getElementById("template").value;

      // Récupérer l'état de la case à cocher
      const affichertelDefaut = DefaultTelCheckbox.checked;

      let signatureHTML = '';


      // Générer la signature au format HTML
      switch (template) {
        case "ClassicTls":
            signatureHTML = `
          <table>   
          <tbody>
            <tr >
              <td style='padding:.75pt .75pt .75pt .75pt'>
                  <img src="img/logo_cowigo.png">
              </td>
            </tr>
            <tr>
              <td valign=top style='padding:.75pt .75pt .75pt .75pt'>
                <p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'>${prenom} ${nom} </span></b><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif; color:#FF740D'>I</span><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'> ${fonction} <br>
                </span><span style='font-size:7.0pt;line-height:107%;font-family:"Helvetica",sans-serif'>271 avenue de Grande Bretagne – 31300 Toulouse</span><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'><br>
                </span><b>
                ${fixe ? '<span style="font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif">Tél. :</span><span style="font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif">' : ''}
                ${fixe ? fixe : ''}
                ${fixe ? '</span>' : ''}
                ${portable ? '<span style="font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif'>Port. :</span><span style='font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif">' : ''}                        
                ${portable ? portable : ''}
                ${portable ? '</span>': ''}
                </b></p>               
              </td>
             </tr>
          </tbody>
        </table>
        `;
    break;
    case "ClassicLyon":
      signatureHTML = `
          <table>   
          <tbody>
            <tr >
              <td style='padding:.75pt .75pt .75pt .75pt'>
                  <img src="img/logo_cowigo.png">
              </td>
            </tr>
            <tr>
              <td valign=top style='padding:.75pt .75pt .75pt .75pt'>
                <p class=MsoNormal><b><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'>${prenom} ${nom} </span></b><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif; color:#FF740D'>I</span><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'> ${fonction} <br>
                </span><span style='font-size:7.0pt;line-height:107%;font-family:"Helvetica",sans-serif'>73 Cours Albert Thomas · 69003 Lyon</span><span style='font-size:9.0pt;line-height:107%;font-family:"Helvetica",sans-serif'><br>
                </span><b>
                ${fixe ? '<span style="font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif'>Tél. :</span><span style='font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif">' : ''}
                ${fixe ? fixe : ''}
                ${fixe ? '</span>' : ''}
                ${portable ? '<span style="font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif'>Port. :</span><span style='font-size:7.0pt;line-height:107%;font-family:Helvetica,sans-serif">' : ''}                        
                ${portable ? portable : ''}
                ${portable ? '</span>': ''}
                </b></p>               
              </td>
             </tr>
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

function copyDivToClipboard() {
 var range = document.createRange();
 range.selectNode(document.getElementById("signaturePreview"));
 window.getSelection().removeAllRanges(); // clear current selection
 window.getSelection().addRange(range); // to select text
 document.execCommand("copy");
 window.getSelection().removeAllRanges();// to deselect
 document.getElementById("SuccessCopy").innerHTML = "Votre signature a été copiée dans le presse papier !";
 document.getElementById("SuccessCopy").setAttribute("style", "display:block");
};
