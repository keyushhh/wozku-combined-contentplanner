# Wozku Claude Code skills

Three skills that give an AI agent the context it needs to work in this repo without being briefed every time.

| Skill | Fires when | Gives the agent |
| --- | --- | --- |
| `wozku-context` | Any Wozku task, or when someone asks what this product is | What Wozku is, the growth loop, the vocabulary traps, what is mocked, the largest known gaps |
| `wozku-admin-design` | Writing or reviewing any component, styling, layout, or UI code | Design tokens, the brand theme layer, hard conventions, reusable patterns, accessibility baseline |
| `wozku-campaign-build` | Post status, readiness, staging, campaigns, contests, screens, or backend schema work | The two-lifecycle model, the send rules, campaign state derivation, contests, templates, the recommended schema |
| `wozku-kb` | How the LIVE platform works, or designing a feature toward it | The full public knowledge base, 56 articles across 10 sections, plus a backlog mapping every KB capability to repo state |

`wozku-kb` uses progressive disclosure: a short `SKILL.md` routes to `reference/*.md` files that are read only when needed. The other three are single files.

**Which skill answers which question.** For *how the code currently behaves*, use `wozku-context` and `wozku-campaign-build`. For *how the product should behave*, use `wozku-kb`. When they disagree, `wozku-kb/reference/BUILD-BACKLOG.md` explains why: the KB is the target state and the repo is being built toward it.

## Installing

Skills are stored here so they live with the repo and stay version-controlled. Claude Code does not read them from `docs/`. Copy them to one of two places:

**Project scope**, shared with anyone who clones the repo:

```bash
mkdir -p .claude/skills
cp -R docs/skills/wozku-* .claude/skills/
```

**Personal scope**, available to you across all projects:

```bash
mkdir -p ~/.claude/skills
cp -R docs/skills/wozku-* ~/.claude/skills/
```

Then run `/skills` in Claude Code to confirm all three are listed.

For other tools that accept skill or instruction files, each `SKILL.md` is self-contained and can be pasted directly.

## Keeping them accurate

`wozku-context`, `wozku-admin-design`, and `wozku-campaign-build` summarise `docs/WOZKU.md`. When that document changes in a way that affects vocabulary, the mock inventory, the domain rules, or the design conventions, update the matching skill in the same change. A skill that has drifted is worse than no skill, because the agent trusts it.

`wozku-kb` mirrors an external source, `https://wozku.com/kb`. It carries a capture date in its header. Re-crawl when the KB is materially updated, and update `reference/BUILD-BACKLOG.md` whenever a KB capability moves from not built to partial or built in the repo. Every reference file records the source URL of every article, so any claim can be re-verified at source.

Order of authority when two sources disagree:

1. The code, for what the repo does today
2. `/CLAUDE.md` for conventions, `/README.md` for the hand-off flow and API contract
3. `https://wozku.com/kb` and its mirror in `wozku-kb/reference/`, for how the product should behave
4. `docs/WOZKU.md`
5. These skills
