# Portfolio Cybersécurité & Infrastructures — Florent Vazeux

> **Review me in 2 minutes:** Jump to [Quick Links](#-quick-links), then open any project's Proof (screenshot/schema) and the Result summary.

---

## 🗺 Navigation
- [Quick Links](#-quick-links)
- [Featured Projects (Top 5)](#-featured-projects-top-5)
- [Lanes & Artifacts](#-lanes--artifacts)
- [Home Lab (Axone)](#-home-lab-axone)
- [The 4P Loop + 6-Week Cadence](#-the-4p-loop--6week-cadence)

---

## 🔗 Quick Links
- **Portfolio site:** _(à ajouter après hébergement)_
- **LinkedIn:** [florent-vazeux](https://www.linkedin.com/in/flo-vz04/) • **GitHub:** _(à ajouter)_
- **Resume (PDF):** _(à ajouter)_ • **One-pager:** _(à ajouter)_
- **Email:** florentbv@outlook.fr

---

## ⭐ Featured Projects (Top 5)

| Area | Title | Proof | Summary |
|---|---|---|---|
| Infra | Homelab Axone — Domaine AD + parc hétérogène | [topology.png](./homelab/topology.png) | Domaine `serv-net.lan`, 5 postes (3 Linux Mint + 2 Win 11), GPO, partages cloisonnés |
| Blue | Wazuh SIEM — gestion des vulnérabilités | [inventaire Wazuh] | 25 CVE analysées (19 artefacts, 6 réelles en attente de patch), cycle Détection→Traitement→Vérification |
| Blue | Wazuh SIEM — agent sur 8 machines | Captures dashboard | Supervision centralisée du parc Axone |
| GRC | Politique de sécurité AD / GPO | GPO + captures | Mot de passe 12 car., verrouillage, SMBv1 désactivé, cloisonnement par OU |
| Auto | Ansible — automatisation Linux | Playbooks | Wallpaper, agents, MAJ auto déployés sur les postes Mint |

> Each project folder includes **Context → Steps → Proof → Result → Next**.

---`

## 🧭 Lanes & Artifacts

### Infrastructure & Administration (Blue/GRC)
**Focus:** Déploiement, administration, supervision d'infrastructure d'entreprise.

- **Artifacts**
  - `homelab/` — schéma réseau, description du lab
  - Captures : AD Users & Computers, GPO, GLPI, Wazuh

---

## 🧪 Home Lab (Axone)

**Contexte :** PME fictive "Axone" — infogérance pour collectivités. Besoin d'une infrastructure centralisée avec parc hétérogène.

**Stack & Topologie**
- **Domaine :** Active Directory `serv-net.lan` (Win Server 2022) — AD, DNS, DHCP
- **Postes Linux :** 3 × Linux Mint 22 (Compta, RH, Communication) — jointure SSSD, sudo restreint par groupe AD
- **Postes Windows :** 2 × Windows 11 (Informatique, Direction) — GPO, RSAT
- **Supervision :** Wazuh (SIEM, 8 agents) + GLPI (inventaire multi-entités)
- **Automatisation :** Ansible (déploiement config Linux)
- **Réseau :** 3 sous-réseaux libvirt, Tailscale VPN mesh, NAT

**Hardware**
- Dell OptiPlex (serveur, 24 Go) • Chuwi N100 (hôte Linux, 8 Go) • Fedora Laptop (hôte Win11, 32 Go)

**Diagram :** [`homelab/topology.png`](./homelab/topology.png)

---

## 🔄 The 4P Loop + 6-Week Cadence
- **Prepare:** définir le besoin (PME Axone, parc hétérogène)
- **Practice:** déploiement réel (AD, GPO, partages, agents)
- **Proof:** captures, schéma, procédures
- **Participate:** documenter et partager

---

## 📄 License
Licensed under the **Apache License, Version 2.0**.