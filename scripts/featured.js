const target = document.querySelector('.farmerssection');

const payload = [
  {
    modal: {
      speackerimg: 'img/f1.jpg',
      modalhead: 'Terramay',
      speakertext1: 'The mission of Terramay is to create a well-balanced ecosystem with rich, fertile soil that produces nutrient-dense foods.',
      speakertext2: ' At this historical place, we want to develop a regenerative retreat rooted in respect for Mother Earth.  Through the experiences at the farm and retreat, '
    },
  },

  {
    modal: {
      speackerimg: 'img/f2.jpg',
      modalhead: 'Met Natuur Mee',
      speakertext1: 'Met Natuur Mee was established to regeneratively unite nature and agriculture. ',
      speakertext2: ' After studying Forestry and Nature Management, Sanne became a forester at the Forestry Department. She realised this is directly related to how we manage nature and produce our food. '
    },
  },

  {
    modal: {
      speackerimg: 'img/f3.jpg',
      modalhead: 'Pflanzgarten',
      speakertext1: 'To create food security and food sovereignty, this beautiful regenerative market garden was founded in the autumn of 2019. ',
      speakertext2: ' Julia and Hans-Albrecht, the founders of this CSA project, have always been interested in joining a community-supported garden. Unfortunately, all of them were located a few kilometers away from Hitzacker. '
    },
  },

  {
  modal: {
    speackerimg: 'img/f4.jpg',
    modalhead: 'Lebendiger',
    speakertext1: 'Meet a lovely little family and their regenerative farm, located in an old farmstead in Mecklenburg, Germany.' ,
    speakertext2: '  Deacon and Anne built up a small organic farm located in Alt-Madlitz Germany roughly 80 Km east of Berlin. Currently, they are experiencing their very first seasons including, in their words, »the crazy process of building infrastructure, '  
  },
},

{
    modal: {
      speackerimg: 'img/f5.jpg',
      modalhead: 'Ackerpulco',
      speakertext1: ' Ackerpulco is a regenerative agriculture project based in Alt-Madlitz, Brandenburg, which we launched in 2020',
      speakertext2: '  Deacon and Anne built up a small organic farm located in Alt-Madlitz Germany roughly 80 Km east of Berlin. Currently, they are experiencing their very first seasons including,'
    },
  },

  
{
    modal: {
      speackerimg: 'img/f6.jpg',
      modalhead: 'Lugar Da Terra',
      speakertext1: ' Tânia, Job and Julien are a little family that is doing market gardening on 5.000 m2.',
      speakertext2: '  Job and Tania used to be film makers and their agricultural journey began in 2011 with a documentary that they made about Ernst Gotsch and his Syntropic Agriculture in Portugal.'
    },
  },
];

payload.forEach((x) => {
    target.innerHTML += `
    <div class="speaker">
                        <div class="imagecont">
                            <div class="speackerimg">
                                <img src="${x.modal.speackerimg}">
                            </div>
                        </div>
                        <div class="speakertext">
                            <h4 >${x.modal.modalhead}</h4>
                            <p class="speakertext1">${x.modal.speakertext1}</p>
                            <p class="speakertext2">${x.modal.speakertext2} </p>
                        </div>
    </div>
    `;
});
