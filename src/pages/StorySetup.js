// TODO: this is a disgusting hack (which I may or may not reuse)
//       CONSIDER REWRITING THIS WHOLE COMPONENT
export function setup(){
    var wide_letters = 'AKLRX';
    var sections = document.getElementsByTagName('section');

    padWideFirstLetters();

    function padWideFirstLetters() {
        for (let section of sections){
            if (section.children.length < 1) continue;

            let p = section.children[0]

            if (wide_letters.includes(p.textContent.charAt(0))){
                p.classList.add('wide-first');
            }
        }
    }
}