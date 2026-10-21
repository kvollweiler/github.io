---
layout: page
title: New Hire Onboarding Workflow
description: An as-is and to-be process review of new hire onboarding, with a swimlane diagram, exception handling, and a responsibility map.
---

- ***Scenario:*** A process review of new hire onboarding at Cascade Mobility, a fictional
transportation technology company. The review covers onboarding a Toll Operations Technician,
from accepted offer through day one.
- ***Audience:*** Operations leadership, HR, and process owners evaluating workflow improvements.
- ***Demonstrates:*** As-is and to-be process mapping, swimlane modeling, exception handling, and
responsibility mapping.

## Background

Onboarding at Cascade Mobility crosses five groups: HR, IT, Facilities, Payroll, and the hiring
manager. Today the process runs on email and spreadsheets, so tasks depend on someone
remembering to notify someone else. The result is delays, duplicated effort, and a first day
that sometimes starts before the workstation does.

This review documents the current (as-is) process, identifies where it breaks, and proposes a
to-be process that sequences work automatically and tracks completion.

## As-Is Process

The as-is process is linear and manual. Each handoff is an email, and no single system shows
where a new hire stands.

| Step | Owner | Action | Tool | Pain Point |
| --- | --- | --- | --- | --- |
| 1 | HR | Receive accepted offer | Email | No central record |
| 2 | HR | Email hiring manager for start date | Email | Waits on a reply |
| 3 | Hiring manager | Reply with start date | Email | Reply can take days |
| 4 | HR | Build onboarding packet by hand | Word | Rebuilt for every hire |
| 5 | HR | Email IT to create accounts | Email | No confirmation, no tracking |
| 6 | IT | Create accounts when email is seen | Ad hoc | Email can be missed |
| 7 | HR | Email Facilities for desk and badge | Email | Separate thread, separate delay |
| 8 | Facilities | Prepare workstation | Ad hoc | Sequence unknown to HR |
| 9 | Payroll | Add new hire to payroll | Spreadsheet | Manual entry, error prone |
| 10 | New hire | Arrive on day one | In person | Readiness unknown until arrival |

### Where It Breaks

- **No single source of truth.** Status lives in five inboxes.
- **Sequence depends on memory.** Nothing prevents step 9 before step 5.
- **No confirmation loop.** HR cannot tell whether IT saw the email.
- **Repeated manual work.** The packet is rebuilt for every hire.
- **Day-one risk.** Readiness is discovered on arrival, not before.

## To-Be Process

The to-be process opens a single onboarding record, generates a role-based task list, assigns
each task to an owner, and tracks completion. Owners are notified automatically and escalated
if a task stalls.

| Step | Owner | Action | System Behavior |
| --- | --- | --- | --- |
| 1 | HR | Open onboarding record | Record created with unique ID |
| 2 | HR | Enter role and start date | Task list generated from role template |
| 3 | System | Assign tasks to owners | IT, Facilities, Payroll, Manager notified |
| 4 | IT | Provision accounts and access | Task marked complete, status updated |
| 5 | Facilities | Prepare workstation and badge | Task marked complete, status updated |
| 6 | Payroll | Add to payroll and benefits | Task marked complete, status updated |
| 7 | Hiring manager | Build day-one schedule and buddy | Task marked complete, status updated |
| 8 | System | Check readiness | Confirms all tasks complete before start |
| 9 | HR | Send pre-boarding packet | Auto-generated from role template |
| 10 | New hire | Arrive on day one | Everything ready, verified in advance |

### What Improves

- **One record, one status.** Everyone sees the same state.
- **Sequenced automatically.** Dependencies are enforced, not remembered.
- **Confirmed completion.** Tasks close only when the owner marks them done.
- **No rebuild.** Packets and task lists come from templates.
- **Day-one certainty.** Readiness is verified before arrival.

## Swimlane Diagram: To-Be

<div class="mermaid">
flowchart TD
    subgraph HR["HR"]
        A[Open onboarding record] --> B[Enter role and start date]
        B --> C[System generates role-based tasks]
        C --> D[Send pre-boarding packet]
    end

    subgraph IT["IT"]
        E[Provision accounts and access] --> F[Mark task complete]
    end

    subgraph Facilities["Facilities"]
        G[Prepare workstation and badge] --> H[Mark task complete]
    end

    subgraph Payroll["Payroll"]
        I[Add to payroll and benefits] --> J[Mark task complete]
    end

    subgraph Manager["Hiring Manager"]
        K[Build day-one schedule and buddy] --> L[Mark task complete]
    end

    C --> E
    C --> G
    C --> I
    C --> K
    F --> M{All tasks complete?}
    H --> M
    J --> M
    L --> M
    M -- Yes --> N[Confirm day-one readiness]
    M -- No --> O[Reminder to task owner]
    O --> M
    N --> P[New hire starts fully prepared]
</div>

## Exception Handling: Overdue Task

<div class="mermaid">
flowchart TD
    A[Task past due date] --> B{Owner responds?}
    B -- Yes --> C[Task completed, workflow continues]
    B -- No, after 24 hours --> D[System sends reminder to owner]
    D --> E{Responds within 48 hours?}
    E -- Yes --> C
    E -- No --> F[Escalate to HR onboarding lead]
    F --> G{Blocker affects day one?}
    G -- Yes --> H[HR adjusts start date or arranges coverage]
    G -- No --> I[Log as open item, continue]
</div>

## Responsibility Map (RACI)

**R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed

| Activity | HR | IT | Facilities | Payroll | Hiring Manager | New Hire |
| --- | --- | --- | --- | --- | --- | --- |
| Open onboarding record | R/A | I | I | I | C | I |
| Provision accounts and access | I | R/A | | | C | |
| Prepare workstation and badge | I | | R/A | | C | |
| Add to payroll and benefits | I | | | R/A | C | |
| Build day-one schedule | C | | | | R/A | I |
| Confirm day-one readiness | R/A | I | I | I | I | |
| Send pre-boarding packet | R/A | | | | C | I |
| Handle overdue tasks | R/A | C | C | C | C | |

## Success Measures

- Percentage of onboardings with all tasks complete before start date
- Average days from accepted offer to accounts provisioned
- Number of escalations per onboarding
- Day-one readiness confirmed in advance, target 100 percent

## Revision History

| Version | Date | Change | Author |
| --- | --- | --- | --- |
| 1.0 | October 2026 | Initial as-is and to-be process review | K. Vollweiler |

<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true });</script>
