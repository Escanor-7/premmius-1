const BASE_API = 'http://192.168.0.56/api';

export default {
  checkToken: async (token) => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });
    const json = await req.json();
    return json;
  },

  signIn: async (email, password): any => {
    const req = await fetch(`${BASE_API}/search/client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((json) => { return json })
      .catch((error) => error);
    console.log('Resposta req =>', req);
    return req;
  },

  signUp: async (name, cpf, email, password): Promise<Object> => {
    const req = await fetch(`${BASE_API}/create/client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        cpf,
        email,
        password,
      })
    })
      .then((res) => res.json())
      .then((json) => { return json })
      .catch((error) => error);

    return req;
    // const json = await req.json();
    // console.log('Json =>', json);
  },

  signUpShopkeeper: async (company_name, cnpj, cpf, foundation_date, email, password): Promise<Object> => {
    console.log('Dados enviados', company_name, cnpj, cpf, foundation_date, email, password)
    const req = await fetch(`${BASE_API}/create/company`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_name,
        cnpj,
        cpf,
        foundation_date,
        email,
        password,
      })
    })
      .then((res) => res.json())
      .then((json) => { return json })
      .catch((error) => error);

    return req;
    // const json = await req.json();
    // console.log('Json =>', json);
  },
}