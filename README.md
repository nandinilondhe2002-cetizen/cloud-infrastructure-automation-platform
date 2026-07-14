# 🚀 Cloud Infrastructure Automation Platform

A full-stack DevOps automation platform that simplifies application deployment using **React**, **Node.js**, **Express**, **Ansible**, **Docker**, **AWS**, and **Kubernetes**.

The platform provides a user-friendly dashboard to automate cloud deployments, monitor deployment history, and manage infrastructure with minimal manual intervention.

---

# 📌 Project Overview

Cloud Infrastructure Automation Platform (CIAP) is designed to automate the deployment of applications to cloud environments.

Instead of manually configuring servers, installing dependencies, cloning repositories, and running Docker containers, users simply provide deployment details through the web interface.

The platform communicates with an Express backend, which executes Ansible playbooks to automate deployment tasks.

---

# ✨ Features

## Frontend

- Modern React Dashboard
- Dark Theme UI
- Responsive Design
- Sidebar Navigation
- Dashboard Analytics
- Deployment Form
- Deployment Status
- Real-time API Communication
- React Router Navigation

---

## Backend

- Express.js REST API
- Modular Folder Structure
- Deployment Controller
- Ansible Service Integration
- Environment Variable Support
- JSON API Responses

---

## DevOps Automation

- Ansible Integration
- Automated Deployment Workflow
- Dynamic Deployment Variables
- Git Repository Support
- Docker Deployment (Upcoming)
- Kubernetes Deployment (Upcoming)
- AWS EC2 Automation (Upcoming)

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons

---

## Backend

- Node.js
- Express.js
- CORS
- Dotenv

---

## DevOps

- Ansible
- Ubuntu (WSL)
- Docker (Upcoming)
- Kubernetes (Upcoming)
- AWS EC2 (Upcoming)

---

# 📂 Project Structure

```
cloud-infrastructure-automation-platform

│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── common
│   │   │   ├── deploy
│   │   │   ├── layout
│   │   │   └── ui
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── styles
│   │
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
├── ansible
│   ├── deploy.yml
│   ├── inventory.ini
│   ├── vars.yml
│   └── tasks
│
├── docker
│
├── kubernetes
│
├── diagrams
│
├── docs
│
└── README.md
```

---

# ⚙️ Current Workflow

```
React Frontend

↓

Axios API

↓

Express Backend

↓

Deployment Controller

↓

Ansible Service

↓

Ubuntu (WSL)

↓

Ansible Playbook
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/nandinilondhe2002-cetizen/cloud-infrastructure-automation-platform.git

cd cloud-infrastructure-automation-platform
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Ubuntu (WSL) Setup

Update packages

```bash
sudo apt update
```

Install Ansible

```bash
sudo apt install ansible -y
```

Verify Installation

```bash
ansible --version
```

---

# Running Ansible

Navigate to

```bash
cd /mnt/c/Nandini/Third\ Year/cloud-infrastructure-automation-platform/ansible
```

Run

```bash
ansible-playbook deploy.yml
```

---

# Deployment Process

1. User fills deployment form.

2. React sends deployment request.

3. Axios calls Express Backend.

4. Express receives deployment request.

5. Controller invokes Ansible Service.

6. Ansible executes deployment playbook.

7. Deployment result is returned to frontend.

---

# API Endpoint

## Deploy Application

```
POST /api/deploy
```

Sample Request

```json
{
  "projectName": "Banking App",
  "repository": "https://github.com/user/project.git",
  "applicationType": "React",
  "template": "Docker Application",
  "region": "ap-south-1",
  "instance": "t2.micro"
}
```

Sample Response

```json
{
  "success": true,
  "message": "Deployment started successfully"
}
```

---

# Screenshots

## Dashboard

- Deployment Statistics
- Running Applications
- Active EC2
- Recent Deployments

## Deployment

- Project Name
- Repository URL
- Application Type
- AWS Region
- Instance Type

---

# Upcoming Features

- Docker Integration
- Kubernetes Deployment
- AWS EC2 Automation
- Jenkins CI/CD
- MongoDB Deployment History
- User Authentication
- Deployment Logs
- Live Deployment Progress
- Rollback Support
- Blue-Green Deployment
- Auto Scaling
- Load Balancer Integration

---

# Future Architecture

```
React

↓

Express

↓

Ansible

↓

AWS EC2

↓

Docker

↓

Kubernetes

↓

Running Application
```

---

# Learning Outcomes

This project demonstrates practical implementation of

- Full Stack Development
- REST API Development
- React Component Architecture
- State Management
- Express Backend Development
- DevOps Automation
- Infrastructure as Code
- Configuration Management
- Cloud Deployment
- Docker Containerization
- Kubernetes Orchestration

---

# Author

**Nandini Londhe**

Computer Engineering Student

Cloud | DevOps | Full Stack Development | AWS | Docker | Kubernetes | Ansible

GitHub

https://github.com/nandinilondhe2002-cetizen

---

# License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
