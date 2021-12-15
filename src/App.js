import React from "react";
import Glavnaya from "./Natv/glavnaya/Glavnaya";
import "./Global.css";
import Glavnaya2 from "./Natv/glavnaya2/Glavnaya2";
import {BrowserRouter, Route} from "react-router-dom";
import Oproekte from "./Natv/Oproekte/Oproekte";
import Payment from "./Natv/Payment/Payment";
import Dlya_yuridicheskih_lic from "./Natv/Dlya_yuridicheskih_lic/Dlya_yuridicheskih_lic";
import Voprosotvet from "./Natv/Voprosotvet/Voprosotvet";
import Oferta from "./Natv/Oferta/Oferta";
import Pravila_zapolneniya_teksta from "./Natv/Pravila_zapolneniya_teksta/Pravila_zapolneniya_teksta";
import Create_channel from "./Components/Create_channel/Create_channel";
import Create_channelBanner from "./Components/Create_channel_banner/Create_channelBanner";

const App = () => {
    return(
        <>
            <BrowserRouter>
             <Route path='/' component={Glavnaya} exact/>
              <Route path="/glavnaya2" component={Glavnaya2} exact/>
                <Route path="/Oproekte" component={Oproekte} exact/>
                <Route path="/Payment" component={Payment} exact/>
                <Route path="/dlya_yuridicheskih_lic" component={Dlya_yuridicheskih_lic} exact />
                <Route path="/voprosotvet" component={Voprosotvet} exact />
                <Route path="/oferta" component={Oferta} exact />
                <Route path="/pravila_zapolneniya_teksta" component={Pravila_zapolneniya_teksta} exact />
                <Route path="/create_channel" component={Create_channel} exact />
                <Route path="/create_channelBanner" component={Create_channelBanner} exact />
            </BrowserRouter>

        </>
    )
}

export default App;