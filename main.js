const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const btn = $$("button");
const importLink = $("input[name = importLink]");
const exportLink = $("input[name = exportLink]");
const formItem = $$(".form__item p");

// https://drive.google.com/file/d/1NkDc0va1uTMCXXpWpo8E46m34URh2_Sm/view?usp=sharing
const myTool = {
    handleEvents: function() {
        check: false;

        //Nhấp để lấy link
        btn[0].addEventListener("click", () => {
            if(importLink.value.startsWith("https://drive.google.com/file/d/") && importLink.value.endsWith("/view?usp=sharing")){
                var driveLink = importLink.value;
                var linkId = driveLink.split('/');
                var concatLink = "http://docs.google.com/uc?export=open&id=";
                var finalLink = "";
                finalLink = finalLink.concat(concatLink, linkId[5]);
                this.check = true;
            }
            else{
                alert("Example about MP3 drive link:\nhttps://drive.google.com/file/d/XXXXXXXX/view?usp=sharing");
                this.check = false;
            }

            importLink.value = "";

            if(this.check == true){
                formItem[1].innerText = "This your final link";
                btn[1].hidden = false;
                exportLink.hidden = false;
                exportLink.value = finalLink;
            }
            else{
                formItem[1].innerText = "";
                exportLink.hidden = true;
                btn[1].hidden = true;
            }
        });

        //Nhấp để copy link
        btn[1].addEventListener("click", () => {
            navigator.clipboard.writeText(exportLink.value);
        });
    },

    start: function() {
        this.handleEvents();
    },
};

myTool.start();