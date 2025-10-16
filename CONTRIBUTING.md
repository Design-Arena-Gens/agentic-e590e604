
# Contributing to Sales CRM

First off, thank you for considering contributing to Sales CRM. It's people like you that make Sales CRM such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/Design-Arena-Gens/agentic-e590e604/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork Sales CRM](https://github.com/Design-Arena-Gens/agentic-e590e604/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-a-new-feature
```

### Get the test suite running

Make sure you can get the test suite running.

```sh
npm test
```

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with Sales CRM's master branch:

```sh
git remote add upstream git@github.com:Design-Arena-Gens/agentic-e590e604.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 38-add-a-new-feature
git rebase master
git push --force-with-lease origin 38-add-a-new-feature
```

Finally, go to GitHub and [make a Pull Request](https://github.com/Design-Arena-Gens/agentic-e590e604/compare) :D

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing, check out this guide:

https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase

After you've rebased your branch, you'll need to force push the changes to your remote branch.

```sh
git push --force-with-lease origin 38-add-a-new-feature
```

## Merging a PR (for maintainers)

A PR can only be merged into master by a maintainer if:

- It is passing CI.
- It has been approved by at least one maintainer.
- It has no requested changes.
- It is up to date with current master.

Any maintainer is allowed to merge a PR if all of these conditions are met.
