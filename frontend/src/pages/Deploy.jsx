import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import DeployForm from "../components/deploy/DeployForm";
import DeployButton from "../components/deploy/DeployButton";
import DeployStatus from "../components/deploy/DeployStatus";

function Deploy() {

  const [formData, setFormData] = useState({
    projectName: "",
    repository: "",
    applicationType: "React",
    template: "Docker Application",
    region: "ap-south-1",
    instance: "t2.micro",
  });

  return (
    <div className="bg-slate-950 min-h-screen">

      <Sidebar />

      <Navbar />

      <div className="ml-64 pt-28 px-8 pb-8">

        <DeployForm
          formData={formData}
          setFormData={setFormData}
        />

        <DeployButton
          formData={formData}
        />

        <DeployStatus />

      </div>

    </div>
  );
}

export default Deploy;