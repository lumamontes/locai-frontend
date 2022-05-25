import React, { Component } from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom"

import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import HomeV1 from "./components/home-v1"

import About from "./components/about"
import Service from "./components/service"
import Team from "./components/team"
import TeamDetails from "./components/team-details"
import NotFound from "./components/404"

import ShopGrid from "./components/shop-grid"
import ProdductDetails from "./components/product-details"

import Contact from "./components/contact"
import Checkout from "./components/checkout"
import MyAccount from "./components/my-account"
import Login from "./components/login"
import Register from "./components/register"
import AddListing from "./components/add-listing"
import { AuthProvider } from "./contexts/AuthContext"
import CadastrarImovel from "./components/Custom-components/CadastrarImovel"
import { AnuncioProvider } from "./contexts/AnuncioContext"
import { UserProvider } from "./contexts/UserContext"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import EditarImovel from "./components/EditarImovel"
import Contrato from "./components/Custom-components/ContratoComponent"
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function Root() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeV1} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/team" component={Team} />
        <Route path="/team-details" component={TeamDetails} />
        <Route path="/imoveis" component={ShopGrid} />
        <Route
          path="/imovel/:property_id"
          component={ProdductDetails}
        />
        {/* blog */}
        <Route path="/contact" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/my-account" component={MyAccount} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add-listing" component={AddListing} />

        <Route path="/cadastrar-imovel" component={CadastrarImovel} />
        <Route path='/editar/:id' component={EditarImovel} />
        <Route path='/contrato/:property_id' component={Contrato} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

// export default Root;

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <AnuncioProvider>
            <Root />
            <ToastContainer hideProgressBar={true} newestOnTop />
          </AnuncioProvider>
        </UserProvider>
      </AuthProvider>
      <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("quarter")
)
