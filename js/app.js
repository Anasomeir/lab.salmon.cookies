'use strict';

let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6m', '7pm', '8pm'];

function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const seattle = {  name: 'Seatlle',
  
    minHourlyCustomers:23,
    maxHourlyCustomers:65,
    avgcookiesperCustomer:6.3,
    total:0,
  
  
    render: function(){
      const section = document.getElementById('seatlle');
  
      const h2El = document.createElement('h2');
      section.appendChild(h2El);
      h2El.textContent=this.name;
  
      const ulEl = document.createElement('ul');
      section.appendChild(ulEl);
  
  
      for(let i=0; i< time.length; i++)
      {
        let x = Math.trunc(getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  [time[i]+':'+x+' cookies.']
        this.total=this.total+x;
      }
  
  
      const pEl= document.createElement('p');
      section.appendChild(pEl);
      pEl.textContent=`Total= ${this.total}`;
  
  
  
    }
  
  };
  
  seattle.render();





function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const Tokyo = { name: 'Tokyo',
  
    minHourlyCustomers:3,
    maxHourlyCustomers:24,
    avgcookiesperCustomer:1.2,
    total:0,
  
  
    render: function(){
      const section = document.getElementById('tokyo');
  
      const h2El = document.createElement('h2');
      section.appendChild(h2El);
      h2El.textContent=this.name;
  
      const ulEl = document.createElement('ul');
      section.appendChild(ulEl);
  
  
      for(let i=0; i< time.length; i++)
      {
        let x = Math.trunc(getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  [time[i]+':'+x+' cookies.']
        this.total=this.total+x;
      }
  
  
      const pEl= document.createElement('p');
      section.appendChild(pEl);
      pEl.textContent=`Total= ${this.total}`;
  
  
  
    }
  
  };
  
  Tokyo.render();




function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const dubai = { name: 'dubai',
  
    minHourlyCustomers:11,
    maxHourlyCustomers:38,
    avgcookiesperCustomer:3.7,
    total:0,
  
  
    render: function(){
      const section = document.getElementById('dubai');
  
      const h2El = document.createElement('h2');
      section.appendChild(h2El);
      h2El.textContent=this.name;
  
      const ulEl = document.createElement('ul');
      section.appendChild(ulEl);
  
  
      for(let i=0; i< time.length; i++)
      {
        let x = Math.trunc(getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  [time[i]+':'+x+' cookies.']
        this.total=this.total+x;
      }
  
  
      const pEl= document.createElement('p');
      section.appendChild(pEl);
      pEl.textContent=`Total= ${this.total}`;
  
  
  
    }
  
  };
  
  dubai.render();

  

function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const Paris = { name: 'Paris',
  
    minHourlyCustomers:20,
    maxHourlyCustomers:38,
    avgcookiesperCustomer:2.3,
    total:0,
  
  
    render: function(){
      const section = document.getElementById('paris');
  
      const h2El = document.createElement('h2');
      section.appendChild(h2El);
      h2El.textContent=this.name;
  
      const ulEl = document.createElement('ul');
      section.appendChild(ulEl);
  
  
      for(let i=0; i< time.length; i++)
      {
        let x = Math.trunc(getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  [time[i]+':'+x+' cookies.']
        this.total=this.total+x;
      }
  
  
      const pEl= document.createElement('p');
      section.appendChild(pEl);
      pEl.textContent=`Total= ${this.total}`;
  
  
  
    }
  
  };
  
  Paris.render();

  function getRandomNumber(min,max){
    return(Math.floor(Math.random() * (max - min + 1) + min));
  }
  const Lima = { name: 'Lima',
  
    minHourlyCustomers:2,
    maxHourlyCustomers:16,
    avgcookiesperCustomer:4.6,
    total:0,
  
  
    render: function(){
      const section = document.getElementById('lima');
  
      const h2El = document.createElement('h2');
      section.appendChild(h2El);
      h2El.textContent=this.name;
  
      const ulEl = document.createElement('ul');
      section.appendChild(ulEl);
  
  
      for(let i=0; i< time.length; i++)
      {
        let x = Math.trunc(getRandomNumber(this.minHourlyCustomers,this.maxHourlyCustomers)*this.avgcookiesperCustomer);
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent =  [time[i]+':'+x+' cookies.']
        this.total=this.total+x;
      }
  
  
      const pEl= document.createElement('p');
      section.appendChild(pEl);
      pEl.textContent=`Total= ${this.total}`;
  
  
  
    }
  
  };
  
  Lima.render();
