# FAT Procedure: Automated Revalidation Service

- ***Scenario:*** Factory acceptance test procedure verifying the automated revalidation
service before release. Fictional company, Cascade Mobility.
- ***Audience:*** QA engineer, test witness, and product owner.
- ***Demonstrates:*** Test procedure design, requirement traceability, boundary testing,
deviation handling, and formal sign off.

---

## Test Purpose

Verify that the automated revalidation service meets its specified requirements before
release to production.

## Test Scope

**In scope:** Revalidation timing, duplicate suppression, low confidence routing,
revalidation logging, and duplicate billing prevention.

**Out of scope:** Reader hardware, camera calibration, and payment gateway integration.

## Test Environment and Configuration

| Item | Value |
|---|---|
| Environment | Staging TMS, build 4.12.0 |
| Reader input | Reader simulator, 3 lanes |
| Suppression window | 5 minutes |
| Confidence threshold | 70 percent |
| Test data set | 40 simulated reads, 12 unmatched tags |

## Entry Criteria

- Build 4.12.0 deployed to staging and smoke tested
- Test data loaded and verified
- Requirement IDs frozen and traceable
- Witness assigned

## Test Steps

| Step ID | Requirement | Test step | Expected result | Actual result | Pass/Fail |
|---|---|---|---|---|---|
| T-01 | REQ-004 | Submit a failed read with a matched tag. | Status becomes MATCHED within 60 seconds of failure. | Matched in 22 seconds. | Pass |
| T-02 | REQ-004 | Submit a failed read with an unmatched tag. | Status remains FAILED_VALIDATION and routes to image billing. | Status unchanged, routed to image billing. | Pass |
| T-03 | REQ-005 | Submit two identical reads 30 seconds apart. | The second read is suppressed and only one transaction is billed. | Second read suppressed. | Pass |
| T-04 | REQ-005 | Submit two identical reads 6 minutes apart, outside the window. | Both reads are billed as separate transactions. | Second read suppressed. | Fail |
| T-04.1 | REQ-005 | Retest T-04 after correcting the suppression window configuration. | Both reads are billed as separate transactions. | Both billed, 6 minutes apart. | Pass |
| T-05 | REQ-006 | Submit a read with 62 percent confidence. | Transaction routes to manual image review. | Routed to manual review. | Pass |
| T-06 | REQ-006 | Submit a read with 85 percent confidence. | Transaction does not route to manual review. | No manual review triggered. | Pass |
| T-07 | REQ-007 | Trigger three revalidation attempts. | Log contains timestamp, outcome, and operator ID for each attempt. | All three entries complete. | Pass |
| T-08 | REQ-008 | Confirm a suppressed duplicate produces no second charge. | One charge on the account. | One charge confirmed. | Pass |

## Deviation Log

| Dev ID | Step ID | Description | Impact | Resolution | Status |
|---|---|---|---|---|---|
| D-01 | T-04 | Suppression window applied as 10 minutes instead of the specified 5. | Reads between 5 and 10 minutes apart were incorrectly suppressed. | Window configuration corrected, T-04 retested and passed. | Closed |

## Exit Criteria

- All in scope steps executed
- No open critical deviations
- All deviations either closed or accepted with owner and date
- Signed off by the product owner

## Result Summary

8 of 9 steps passed. One first attempt failure at T-04 was traced to a configuration
defect, corrected, and passed on retest at T-04.1. Boundary behaviour at the 5 minute
suppression window is now verified.

**Traceability:** 5 requirements covered across 9 steps.

## Sign Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | K. Vollweiler | | October 19, 2026 |
| Executed by | | | |
| Witnessed by | | | |
| Approved by | | | |

## Revision History

| Version | Date | Change | Author |
|---|---|---|---|
| 1.0 | October 19, 2026 | Initial release | K. Vollweiler |
