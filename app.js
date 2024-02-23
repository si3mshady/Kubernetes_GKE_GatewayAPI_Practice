const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello, Linkedin.  Happy Friday!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


// kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/standard-install.yaml
// kubectl create deploy saas --image=si3mshady/hello:1 --port 80 
// kubectl expose deploy saas
// kubectl apply -f IngressAPI.yml   
// sudo vi /etc/hosts   
// update /etc/hosts with this value 127.0.0.1 localhost elliottsupersayian.com
// sudo kubectl port-forward  service/saas 80:80

