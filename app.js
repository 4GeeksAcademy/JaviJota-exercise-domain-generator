function getRandomDomain(){
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let domain = ['.com', '.net', '.es', '.org'];
    let randomDomainsArr = []
    for(let pronouns of pronoun){
        let randomDomain = '';
        for(let adjs of adj){
            for(let nouns of noun){
                for(let domains of domain){
                    randomDomain = `${pronouns}${adjs}${nouns}${domains}`;
                    if (randomDomainsArr.length === 0){
                        randomDomainsArr.push(randomDomain);
                    }
                    else randomDomainsArr.push('<br>' + randomDomain);
                };
            };
        };
    };
    return randomDomainsArr
};

function printRandomDomainList () {
    const domainContainer = document.querySelector('.domain-list');
    domainContainer.innerHTML = getRandomDomain();
};

printRandomDomainList();

console.log(getRandomDomain())