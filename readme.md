# installation

node > 9.x

$ npm install

> config/config.js > instagram keys + token

# usage

$ node app help

$ node app search --tag="dog"

$ node app search -t="dog"

$ node app searchEvery --tag="dog, cat"

$ node app infos -t="dog"

# structure

- résultats des recherches :

./media
  /dog
    *.jpg
    data.json

TODO

- text / tag
- + d'images possibles
- tous les hastags existants
- nombres d'images postés en temps réels pour une localisation donnée
- information par image texte
- chercher pendant une journée toutes les dix minutes la même occurence
- chercher plusieurs occurence en même temps (dizaine de mots clés)

Pour l'application SearchOnInstagram, j'aurai souhaité avoir le maximum d'images possibles sur un hashtag donné, ainsi que les commentaires, les autres hashtags associés, la localisation et le nombre de like... Si tout cela est possible ?

Et puis, comment puis-je faire pour récupérer le nombre d'images postées par
secondes et par villes sur Instagram ?
De même, comment puis-je faire pour récupérer tous les hashtags existant qui
sont utilisés sur Instagram?

# app generative

- parser le json extraire les commentaires
- enrichir une base
- 4 écrans qui affiche 4 phrases







