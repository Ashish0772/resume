// for nav 
const anchorMenu = document.getElementsByClassName("link");

const menuList = Array.from(anchorMenu);
menuList.forEach(active => {
    active.addEventListener("click", () => {
        menuList.forEach(btn => {
            btn.style.borderBottom = "2px solid black";
            btn.style.transition = "0s";
            btn.style.color = "white";
        });

        active.style.borderBottom = "2px solid #0071ff";
        active.style.transition = "0.3s";
        active.style.color = " #0071ff";
    });

});


// for progress- part section value 
const skillValue = [
    {
        value: "99%",
        skillIcon: "ri-html5-line",
        featureIcon: "ri-javascript-line",
        featureColor: "feature-js",
        progressIcon: "html-progress",
        featureLang: "javaScript"
    },
    {
        value: "75%",
        skillIcon: "ri-css3-line",
        featureIcon: "ri-reactjs-line",
        featureColor: "feature-react",
        progressIcon: "css-progress",
        featureLang: "React js"
    },
    {
        value: "75%",
        skillIcon: "ri-javascript-line",
        featureIcon: "ri-nodejs-line",
        featureColor: "feature-node",
        progressIcon: "js-progress",
        featureLang: "Node js"
    },
    {
        value: "10%",
        skillIcon: "ri-reactjs-fill",
        featureIcon: "ri-nodejs-line",
        featureColor: "feature-node",
        progressIcon: "react-progress",
        featureLang: "mongoDB"
    },
    {
        value: "0%",
        skillIcon: "ri-nodejs-line",
        featureIcon: "ri-javascript-line",
        featureColor: "feature-express",
        progressIcon: "node-progress",
        featureLang: "Express js"
    },
    {
        value: "8%",
        skillIcon: "ri-reactjs-fill",
        featureIcon: "ri-javascript-line",
        featureColor: "feature-native",
        progressIcon: "mongo-progress",
        featureLang: "Reactive Native"
    },
    {
        value: "0%",
        skillIcon: "ri-reactjs-fill",
        featureIcon: "ri-javascript-line",
        featureColor: "feature-angular",
        progressIcon: "dsa-progress",
        featureLang: "Angular js"
    },
    {
        value: "0%",
        skillIcon: "ri-reactjs-fill",
        featureIcon: "ri-javascript-line",
        featureColor: "feature-dsa",
        progressIcon: "java-progress",
        featureLang: "DSA"
    },

]

// Create progress-part Dynamically
for (let i = 0; i < skillValue.length; i++) {
    
    function skillPart(skillValue) {

        const progressSection = document.querySelector(".progress-section");

        // porgress-part 
        const progressPart = document.createElement("div");
        progressPart.classList.add("progress-part", "flex-class");

        //progress
        const progress = document.createElement("div");
        progress.classList.add("progress", "flex-class", skillValue[i].progressIcon);

        //sub-progress
        const subProgress = document.createElement("div");
        subProgress.classList.add("sub-progress", "flex-class");

        const span = document.createElement("span");
        span.innerText = (skillValue[i].value);

        const i1 = document.createElement("i");
        i1.classList.add(skillValue[i].icon);

        progressPart.appendChild(progress);
        progress.appendChild(subProgress);
        subProgress.appendChild(span);
        subProgress.appendChild(i1);

        progressSection.appendChild(progressPart);

    }
    // call the function 
    skillPart(skillValue);


  

}

// for feature-container-section part dynamically 
const featureValue = [
    {
        featureIcon: "ri-javascript-line",
        featureColor: "feature-js",
        featureLang: "javaScript"
    },
    {
        featureIcon: "ri-reactjs-line",
        featureColor: "feature-react",
        featureLang: "React js"
    },
    {
        featureIcon: "ri-nodejs-line",
        featureColor: "feature-node",
        featureLang: "Node js"
    },
    {
        featureIcon: "ri-nodejs-line",
        featureColor: "feature-node",
        featureLang: "mongoDB"
    },
    {
        featureIcon: "ri-javascript-line",
        featureColor: "feature-express",
        featureLang: "Express js"
    },
    {
        featureIcon: "ri-javascript-line",
        featureColor: "feature-native",
        featureLang: "Reactive Native"
    },
    {
        featureIcon: "ri-javascript-line",
        featureColor: "feature-angular",
        featureLang: "Angular js"
    },
    {
        featureIcon: "ri-javascript-line",
        featureColor: "feature-dsa",
        featureLang: "DSA"
    },

]

for(let i = 0; i<featureValue.length; i++)
{
      // Feature skill part 
    function featurePart(featureValue) {

        const featureSection = document.querySelector(".feature-container-section");

        const featurePart1 = document.createElement("div");
        featurePart1.classList = "feature-part";

        const feature = document.createElement("div");
        feature.classList = "feature";

        const featureIntersted = document.createElement("div");
        featureIntersted.classList.add("feature_intersted", "flex-class", featureValue[i].featureColor);

        const i2 = document.createElement("i");
        i2.classList = featureValue[i].featureIcon;

        const span1 = document.createElement("span");
        span1.innerText = featureValue[i].featureLang;

        featurePart1.appendChild(feature);
        feature.appendChild(featureIntersted);
        featureIntersted.appendChild(i2);
        featureIntersted.appendChild(span1);
        featureSection.appendChild(featurePart1);
    }

    featurePart(featureValue);
}