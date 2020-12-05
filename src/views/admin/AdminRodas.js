import React from "react";

// components
import CardStats from "components/Cards/CardStats.js";
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function AdminRodas() {
  return (
    <>
        <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Roda da Vida"
                  statTitle="25 respostas"
                  statArrow="up"
                  statPercent="3,48"
                  statPercentColor="text-green-500"
                  statDescripiron="mês anterior"
                  statIconName="far fa-heart"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Criar Nova"
                  statTitle=""
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron=""
                  statIconName="fas fa-plus"
                  statIconColor="bg-gray-700"
                  statEmpty={true}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Criar Nova"
                  statTitle=""
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron=""
                  statIconName="fas fa-plus"
                  statIconColor="bg-gray-700"
                  statEmpty={true}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Criar Nova"
                  statTitle=""
                  statArrow=""
                  statPercent=""
                  statPercentColor="text-red-500"
                  statDescripiron=""
                  statIconName="fas fa-plus"
                  statIconColor="bg-gray-700"
                  statEmpty={true}  
                />
              </div>
            </div>
        </div>
        <div className="flex flex-wrap" style={{marginTop: '50px'}}>
            <div className="w-full lg:w-8/12 px-4">
            <CardSettings />
            </div>
            <div className="w-full lg:w-4/12 px-4">
            <CardProfile />
            </div>
        </div>
    </>
  );
}
