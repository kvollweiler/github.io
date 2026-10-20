- ***Scenario:*** Requirements specification for the automated revalidation service in a
tolling back office system. Fictional company, Cascade Mobility.
- ***Audience:*** Product owner, engineering, QA, and the technical writer maintaining the
document set.
- ***Demonstrates:*** Requirements elicitation, acceptance criteria, requirement
traceability, and scope control.

---

## Document Control

| Field | Value |
|---|---|
| Document ID | REQ-2026-009 |
| Version | 1.1 |
| Date | October 19, 2026 |
| Author | K. Vollweiler, Technical Writer |
| Status | Baselined |

## Context

A read that fails validation currently sits in a queue until an operator works it
manually. The automated revalidation service attempts to resolve failures without
operator effort and routes what it cannot resolve to the correct downstream queue.

## User Stories

### Story 1: Automatic Revalidation

As a TMC operator, I want failed reads revalidated automatically, so that valid revenue
is captured without manual intervention.

**Acceptance Criteria**

- **Given** a read that fails validation, **When** the failure is recorded, **Then** the
  system attempts revalidation within 10 seconds without operator action.
- **Given** a revalidation attempt that matches a known tag, **When** the attempt
  completes, **Then** the transaction status becomes MATCHED and leaves the failed queue.

### Story 2: Queue Throughput and Failure Routing

As a TMC operator, I want revalidation to complete quickly and unresolved failures
routed, so that the failed queue does not back up.

**Acceptance Criteria**

- **Given** any failed read, **When** revalidation runs, **Then** the attempt completes
  within 60 seconds of the failure.
- **Given** a revalidation attempt that does not match, **When** the attempt completes,
  **Then** the transaction remains FAILED_VALIDATION and routes to image review.

### Story 3: Rule Based Routing for Edge Cases

As a revenue assurance analyst, I want duplicate and low confidence reads handled by
rule, so that edge cases reach the correct queue without manual sorting.

**Acceptance Criteria**

- **Given** two reads of the same tag within a 5 minute window, **When** the second read
  is processed, **Then** it is suppressed and treated as one transaction.
- **Given** a read with a plate confidence score below 70 percent, **When** the read is
  processed, **Then** the transaction routes to manual image review.
- **Given** a read with a confidence score at or above 70 percent, **When** the read is
  processed, **Then** the transaction does not route to manual review.

### Story 4: Audit Trail and Billing Accuracy

As a compliance analyst, I want every revalidation logged and billing to occur exactly
once, so that the process is auditable and defensible.

**Acceptance Criteria**

- **Given** any revalidation attempt, **When** it completes, **Then** a log entry records
  the timestamp, outcome, and operator ID.
- **Given** a suppressed duplicate, **When** billing runs, **Then** the account receives
  exactly one charge.

## Traceability Matrix

| Requirement ID | Requirement | Test Case | Status |
|---|---|---|---|
| REQ-001 | System attempts revalidation automatically within 10 seconds of a validation failure. | T-01 | Verified, integration test |
| REQ-002 | A successful revalidation sets transaction status to MATCHED. | T-01 | Verified, integration test |
| REQ-003 | A failed revalidation routes the transaction to image review. | T-02 | Verified, integration test |
| REQ-004 | Revalidation completes within 60 seconds of the failure. | T-01 | Verified, FAT |
| REQ-005 | Two reads of the same tag within 5 minutes are treated as one transaction. | T-03, T-04 | Verified with deviation, FAT |
| REQ-006 | Plate confidence below 70 percent routes the transaction to manual review. | T-05, T-06 | Verified, FAT |
| REQ-007 | Every revalidation attempt is logged with timestamp, outcome, and operator ID. | T-07 | Verified, FAT |
| REQ-008 | A suppressed duplicate produces exactly one charge. | T-08 | Verified, FAT |

## Out of Scope

- Reader hardware and camera calibration
- Payment gateway integration and settlement
- Out of state plate lookup and DMV interfaces
- Account adjustments and disputes
- Reporting and dashboard changes

## Open Questions

| ID | Question | Owner | Status |
|---|---|---|---|
| OQ-01 | Does the 60 second target apply during peak load or only at baseline? | Product Owner | Open |
| OQ-02 | Should the suppression window be configurable per gantry or global? | Engineering | Open |
| OQ-03 | What is the retention period for revalidation log entries? | Compliance | Answered, 24 months |
| OQ-04 | Who owns the routing rule when a read is both duplicate and low confidence? | Product Owner | Open |

## Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.1 | October 19, 2026 | Added traceability matrix and open questions | K. Vollweiler |
| 1.0 | September 2026 | Initial baseline | K. Vollweiler |

## Related Documents

- [FAT Verification Procedure](fat-verification-procedure.md)
- [SOP: Investigating a Failed Toll Tag Read](standard-operating-procedure.md)
- [Style Guide Excerpt](style-guide-excerpt.md)
