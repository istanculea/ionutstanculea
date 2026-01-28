

## Summary

Update the Experience, Skills, and Education sections to accurately reflect the information from your uploaded CV. This includes correcting job titles, companies, dates, and achievements, as well as updating the technical skills and certifications to match your actual professional background.

---

## Changes Overview

### Current vs. CV Data Comparison

| Section | Current Website | Your CV |
|---------|-----------------|---------|
| EA Period | Nov 2022 - Present | Oct 2021 - Present |
| Second Job | Metro Systems (DevOps) | Autodesk (Senior QA) |
| Third Job | Altex Romania | ALTEN (Support Lead) |
| Fourth Job | BRD Bank | ALTEN (Support Engineer) |
| Missing Jobs | - | Expleo Group, Koyo internship |
| Experience Years | 7+ years | 5+ years |
| Certifications | Azure certs + testing | LinkedIn/Training certs only |

---

## Implementation Plan

### 1. Update Experience Component and Translations

**File: `src/components/Experience.tsx`**
- Update the experiences array to include 6 positions instead of 4:
  - Cloud Operations Engineer at Electronic Arts
  - Senior Quality Assurance Analyst at Autodesk
  - Support Team Lead at ALTEN
  - Support Engineer at ALTEN  
  - Mechanical Design Engineer at Expleo Group
  - Mechanical Technician (Internship) at Koyo

**Files: `src/i18n/locales/en.json`, `ro.json`, `es.json`**
- Replace the experience section with accurate data from CV:
  - EA: Oct 2021 - Present (not Nov 2022)
  - Replace Metro Systems with Autodesk (Nov 2019 - Jan 2021)
  - Replace Altex with ALTEN Support Team Lead (Mar 2019 - Nov 2019)
  - Replace BRD with ALTEN Support Engineer (Oct 2016 - Mar 2019)
  - Add Expleo Group as part-time role (May 2016 - Sep 2019)

### 2. Update Skills Component

**File: `src/components/Skills.tsx`**
- Update technical skills to match CV:
  - Cloud Platforms: AWS, Azure
  - Infrastructure as Code: Terraform
  - Containers: Kubernetes, Docker
  - CI/CD: Jenkins, GitHub Actions (basic)
  - Monitoring: Grafana, Prometheus (basic)
  - Scripting: Bash, PowerShell, Python
  - Version Control: Git
  - Databases: PostgreSQL, MySQL
  - Other Tools: Jira, Confluence, AutoCAD, CATIA V5, Revit

- Update Languages (remove Italian as it's not in CV):
  - Romanian - Native
  - English - C2
  - Spanish - B1

### 3. Update Education Component

**File: `src/components/Education.tsx`**
- Update certifications list to match CV:
  - Agile Test Automation - Learning Tree International
  - API Testing Foundations - LinkedIn
  - Scrum (Basics and Advanced) - LinkedIn
  - Agile Requirements Foundations - LinkedIn
  - Business Analysis Foundations - LinkedIn
  - Programming Foundations: QA - LinkedIn
- Remove Microsoft Azure certifications (AZ-900, AZ-104) as they're not listed in the CV

### 4. Update About/Hero Section

**Files: `src/i18n/locales/en.json`, `ro.json`, `es.json`**
- Update experience years from "7+ years" to "5+ years"
- Update professional profile description to match CV summary

---

## Technical Details

### Files to Modify

| File | Changes |
|------|---------|
| `src/components/Experience.tsx` | Add 2 more experience entries (Expleo, structure for 6 jobs) |
| `src/components/Skills.tsx` | Update skills arrays, remove Italian language, add Terraform, Prometheus |
| `src/components/Education.tsx` | Replace certifications list with CV data |
| `src/i18n/locales/en.json` | Full experience data update, about section update |
| `src/i18n/locales/ro.json` | Romanian translations for all changes |
| `src/i18n/locales/es.json` | Spanish translations for all changes |

### New Experience Structure (English)

```text
1. Cloud Operations Engineer - Electronic Arts (Oct 2021 - Present)
2. Senior Quality Assurance Analyst - Autodesk (Nov 2019 - Jan 2021)
3. Support Team Lead - ALTEN (Mar 2019 - Nov 2019)
4. Support Engineer - ALTEN (Oct 2016 - Mar 2019)
5. Mechanical Design Engineer (Part-time) - Expleo Group (May 2016 - Sep 2019)
```

### Updated Skills Categories

```text
- Cloud Platforms: AWS, Azure
- Infrastructure as Code: Terraform
- Containers & Orchestration: Kubernetes, Docker
- CI/CD: Jenkins, GitHub Actions
- Monitoring & Logging: Grafana, Prometheus
- Scripting: Bash, PowerShell, Python
- Version Control: Git
- Databases: PostgreSQL, MySQL
- Other Tools: Jira, Confluence, AutoCAD, CATIA V5, Revit
```

### Updated Certifications

```text
- Agile Test Automation - Learning Tree International
- API Testing Foundations - LinkedIn
- Scrum (Basics and Advanced) - LinkedIn
- Agile Requirements Foundations - LinkedIn
- Business Analysis Foundations - LinkedIn
- Programming Foundations: QA - LinkedIn
```

