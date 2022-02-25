import React from 'react';
import { Header, Sidebar, Button } from '../components'
import { shortenAdd } from '../utils/shortenAdd'

import './Contract.css'


const Dashboard = () => {
  let address = '0x52EdB5dFCE4640644AD366b660ee9b78872b16c3'
  return (
    <div className="relative">
      <Header />
      <div className="flex pt-20 items-center justify-center">
        <Sidebar />

        <div className="mainContainer">
          <div className="formCont mt-10 mb-20">

            <div className="flex flex-col justify-center items-center">
              <div className="w-5/6 mainCont">
                <h2 className="mb-5 text-bold text-2xl">Airdrop</h2>
                <div className="bg-white rounded-2xl shadow-sm px-7 py-10">
                  <h2 className="text-lg">RIAD Token Airdrop #1</h2>
                  <p className="text-[#F3315E]">Ongoing</p>
                  <p className="text-xs mt-3">200,000,000 RIAD tokens to be distributed. You must complete the simple tasks to qualify. </p>

                  <table className="table kAJryw mt-5">
                    <tr>
                      <td className="gUEunp">Token Name</td>
                      <td className="gUEunp">RIAD</td>
                    </tr>
                    <tr>
                      <td className="gUEunp">Total Supply</td>
                      <td className="gUEunp">1,000,000,000</td>
                    </tr>
                    <tr>
                      <td className="gUEunp">Token Symbol</td>
                      <td className="gUEunp">$RIAD</td>
                    </tr>
                  </table>

                  <div className="flex">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOjAB17nUapWZwu3_H1U0EXEtM6F7aGnUJxdrkE4iNTDqNLg/viewform?usp=sf_link" target="_blank">
                      <Button title="Claim Airdrop 🔥" customClass="bg-primary mt-10" />
                    </a>
                    <a href="#" target="_blank">
                      <Button title="View on Solscan" customClass="bg-primary ml-5 mt-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



export default Dashboard;
