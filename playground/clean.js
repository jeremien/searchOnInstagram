// fonction pour nettoyer le texte
const clean = (texte) => {

    // passer les chaînes de caractères en minuscule
    texte = texte.toLowerCase();
    // on enlève http
    // texte = texte.replace(/(?:https?|ftp):\/\/[\n\S]+/g,'');
    // éliminer tous les chiffres
    // texte = texte.replace(/\d+/g, '');
    // on garde que le latin
    // texte = texte.replace(/[^\u0000-\u007F]/g, '');
    // on efface @+ (à tester)
    // texte = texte.replace(/@([\s]*\S+)/g, '');
    // on efface @+ (à tester)
    // texte = texte.replace(/#([\s]*\S+)/g, '');
    // chercher et effacer la ponctuation avec les regex
    // texte = texte.replace(/[.,#!$%&;|:{}=\-_`~()'"”“'?…<>+¦–]/g,'');
    // éliminer tous les mots de moins de 3 lettres
    // texte = texte.replace(/(\b(\w{1,3})\b(\s|$))/g, '');
    // on sépare ligne à ligne
    // texte = texte.replace(/\n\n/g,'\n').replace(/\s/g,'\n');

    // on retourne la chaine de caractère modifiée
    return texte;
};

module.exports = clean;
