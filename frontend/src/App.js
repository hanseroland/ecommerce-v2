import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AppRoutes from './components/AppRoutes';
import Accueil from './pages/Accueil';
import Aide from './pages/Aide';
import Categorie from './pages/Categorie';
import Conditions from './pages/Conditions';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import DetailLayout from './pages/DetailLayout';
import Favoris from './pages/Favoris';
import HomeLayout from './pages/HomeLayout';
import Inscription from './pages/Inscription';
import Panier from './pages/Panier';
import Personnelles from './pages/Personnelles';
import Produit from './pages/Produit';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import  {store, persistor } from './redux/store';
import Livraison from './pages/Livraison';



function App() {
  return (
    <>
    <Provider   store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Router>
           <Switch>
                  <AppRoutes   exact={true} path="/"   component={Accueil}  layout={HomeLayout} />
                  <AppRoutes   path="/panier"   component={Panier}  layout={DetailLayout} />
                  <AppRoutes   path="/connexion"   component={Connexion}  layout={DetailLayout} />
                  <AppRoutes   path="/inscription"   component={Inscription}  layout={DetailLayout} />
                  <AppRoutes   path="/livraison"   component={Livraison}  layout={DetailLayout} />
                  <AppRoutes   path="/produit/:id"   component={Produit}  layout={DetailLayout} />
                  <AppRoutes   path="/categories/:categorie"   component={Categorie}  layout={DetailLayout} />
                  <AppRoutes   path="/favoris"   component={Favoris}  layout={DetailLayout} />
                  <AppRoutes   path="/aide"   component={Aide}  layout={DetailLayout} />
                  <AppRoutes   path="/conditions-generales"   component={Conditions}  layout={DetailLayout} />
                  <AppRoutes   path="/donnees-personnelles"   component={Personnelles}  layout={DetailLayout} />
                  <AppRoutes   path="/contact"   component={Contact}  layout={DetailLayout} />


           </Switch>
         </Router>
       </PersistGate>
     </Provider>
    </>
  );
}

export default App;
