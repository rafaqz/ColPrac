var documenterSearchIndex = {"docs":
[{"location":"#ColPrac:-Contributor's-Guide-on-Collaborative-Practices-for-Community-Packages","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"(Image: Global Docs)","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"This document describes some best practices for collaborating on repositories. Following these practices makes it easier for contributors (new and old) to understand what is expected of them. It should be linked to in the README.md.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"There are many good practices that this document does not cover. These include other members of the wider community reviewing pull requests (PRs) they are interested in, and maintainers encouraging and supporting people who open issues to make PRs to solve them. This document facilitates these other good practices by clarifying what can seem like a mysterious process to those who are unfamiliar with it.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"This document is also only intended for community practices, it is not suitable for solo projects with one maintainer.","category":"page"},{"location":"#Community-Standards","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Community Standards","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Interactions with people in the community must always follow the community standards, including in pull requests, issues, and discussions.","category":"page"},{"location":"#Contributing-PRs","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Contributing PRs","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"PRs should match the existing code style present in the file.\nPRs affecting the public API, including adding new features, must update the public documentation.\nComments and (possibly internal) docstrings should make the code accessible.\nPRs that change code must have appropriate tests.\nChanges to the code must be made via PR, not pushing to master.","category":"page"},{"location":"#Reviewing,-Approving,-and-Merging-PRs","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Reviewing, Approving, and Merging PRs","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"PRs must have 1 approval before they are merged.\nPR authors should not approve their own PRs.\nPRs should pass CI tests before being merged.\nPRs by people without merge rights must have approval from someone who has merge rights (who will usually then merge the PR).\nPRs by people with merge rights must have approval from someone else, who may or may not have merge rights (and then may merge their own PR).\nPRs by people with merge rights should not be merged by people other than the author (just approved).","category":"page"},{"location":"#Releases","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Releases","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"A release should be made as soon as possible after a bugfix PR is merged.\nCare and consideration should be given as to when to make a breaking release.\nIf the repository is in a state where there are unreleased changes for an extended period of time in preparation for a release, then the version in the Project.toml should be set to the version number of the intended release, with the -DEV suffix.\nThe person who merged the PR should register the new release of the package.","category":"page"},{"location":"#Becoming-a-Collaborator-(gaining-merge-rights)","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Becoming a Collaborator (gaining merge rights)","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Collaborator merge rights are typically assigned at an Organizational level for all repositories in a GitHub organization, or at a Team level for a subset of repositories.\nBefore becoming a collaborator, it is usual to:\ncontribute several PRs,\nreview constructively and kindly several PRs,\ncontribute meaningfully to several discussions on issues.\nYou may ask to be added as a collaborator.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"It is not rude to ask.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"","category":"page"},{"location":"#ColPrac:-Further-Guidance","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Further Guidance","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"This page offers some further guidance on conventions that can be helpful when collaborating on projects. This is an expansion on the Collaborative Practices, with more details and extra guidance. Anything detailed here should be considered less important than the main Collaborative Practices.","category":"page"},{"location":"#Guidance-on-contributing-PRs","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Guidance on contributing PRs","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"You should usually open an issue about a bug or possible improvement before opening a PR with a solution.\nPRs should do a single thing, so that they are easier to review.\nFor example, fix one bug, or update compatibility, rather than fixing a bunch of bugs, and updating compatibility, and adding a new feature.\nPRs should add tests which cover the new or fixed functionality.\nPRs that move code should not also change code, so that they are easier to review.\nIf only moving code, review for correctness is not required.\nIf only changing code, then the diff makes it clear what lines have changed.\nPRs with large improvements to style should not also change functionality.\nThis is to avoid making large diffs that are not the focus of the PR.\nWhile it is often helpful to fix a few typos in comments on the way past, it is different from using a regex or formatter on the whole project to fix spacing around operators.\nPRs introducing breaking changes should make this clear when opening the PR.\nYou should not push commits with commented-out tests.\nIf pushing a commit for which a test is broken, use the @test_broken macro.\nCommenting out tests while developing locally is okay, but committing a commented-out test increases the risk of it silently not being run when it should be.\nYou should not squash down commits while review is still ongoing.\nSquashing commits prevents the reviewer from seeing what commits have been added since the last review.\nYou should help review your PRs, even though you cannot approve your own PRs.\nFor instance, start the review process by commenting on why certain bits of the code changed, or highlighting places where you would particularly like reviewer feedback.","category":"page"},{"location":"#Guidance-on-reviewing-PRs","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Guidance on reviewing PRs","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Review comments should be phrased as questions, as it shows you are open to new ideas.\nFor instance, “Why did you change this to X? Doesn’t that prevent Y?” rather than “You should not have changed this, it will prevent Y”.\nSmall review suggestions, such as typo fixes, should make use of the suggested change feature.\nThis makes it easier and more likely for all the smaller changes to be made.\nReviewers should continue acting as reviewers until the PR is merged.","category":"page"},{"location":"#Guidance-on-Package-Releases","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Guidance on Package Releases","text":"","category":"section"},{"location":"#Incrementing-the-package-version","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Incrementing the package version","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Follow the extension of SemVer 2.0 encoded in Julia package manager Pkg.jl.\nFor a version number X.Y.Z, with Major version X, Minor version Y, Patch version Z:\nPost-1.0.0: for breaking changes increment X, for non-breaking new features increment Y, for bug-fixes increment Z.\nPre-1.0.0: for breaking changes increment Y, for non-breaking (feature or bug-fix) increment Z.\nIntroducing deprecations is not breaking; removing deprecations is breaking.\nThere is a cost to making breaking releases - downstream packages have to add support for the new version - so there has to be a bigger benefit to making breaking changes.","category":"page"},{"location":"#Unreleased-Changes-and-DEV","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Unreleased Changes and -DEV","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Following the Collaborative Practices, when there are unreleased changes in the repository for an extended period of time, the version number in the Project.toml should be suffixed with -DEV. This makes it clear that there are unreleased changes. Which is useful for many things, including quickly understanding why a bug is still occurring, and working out if a bugfix may need to be backported.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Some more details on the use of -DEV.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"After/during/before the PR making the first change of the release, the version number in the Project.toml should be changed to the intended release number should suffixed -DEV.\nFor instance, if the current version is 0.6.3, then the PR making the breaking change could bump it to 0.7.0-DEV.\nThings are more complex if a breaking change is made after the version has been suffixed with -DEV for a non-breaking change.\nThis should be rare, since non-breaking changes should be released as soon as possible.\nIf it does occur, the following rule applies: if all version numbers to the right of the digit you would increment are zero, then you do not need to change the version; otherwise, you do.\nFollow-up PRs can then be made, which do not need to increment the version.\nOnce all the follow-up changes have been made, we can make a PR to drop the -DEV suffix and make a new release once this PR is merged.\nNote that locally, when using pkg”dev Foo...” to install particular unreleased versions to an environment, Pkg ignores suffixes to the version number.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Pkg treats 0.7.0-DEV identically to 0.7.0. This means you can update the [compat] section of a group of packages and test them together.","category":"page"},{"location":"#Changing-dependency-compatibility","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Changing dependency compatibility","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Generally, changing dependency compatibility should be a non-breaking feature.\ni.e. pre-1.0, change the patch version number; post-1.0, change the minor version number.\nFor instance, adding or removing compatibility with a particular version of a current dependency, which may or may not require internal code changes.\nThis also applies when adding or removing packages as dependencies.\nThe new feature in question is the ability to use with a different set of packages.\nChanging a dependency to resolve a bug is a bug-fix.\ni.e. pre/post-1.0 change patch version number.\nFor instance, if a bug in a downstream dependency is causing a problem in your package, restricting compat to not allow that version would be a bug-fix.\nChanging compatibility with dependencies may be a breaking release, if it breaks the user-facing interface.   That is to say, if the dependency’s API leaks into your API.   There are three ways that this can happen:\nReexporting a function that has changed.\nReturning an object of a type whose behavior has changed.\nSubtyping an object that has changed.","category":"page"},{"location":"#Dropping-support-for-earlier-versions-of-Julia","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Dropping support for earlier versions of Julia","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Changing Julia version compatibility must be a non-breaking feature.\nIt cannot alone be breaking, since Julia versions that are now unsupported will just never see this newer package release.\nTagging the change as a Minor release makes it possible to release backported bug fixes for users stuck on the old Julia version.   For instance, if the current release is 5.4.0, then we can still go back and release 5.3.1.\nIf the package is pre-1.0, minor releases count as breaking. Therefore, tag the release as a patch release unless one intends to\nsupport earlier versions of Julia with backports (as needed).\nDropping support for earlier versions of Julia has a cost - it prevents users on those versions, such as the Long-Term Support version, from using newer releases of your package - so there should usually be a compelling reason to drop support.","category":"page"},{"location":"#Accidental-breaking-releases","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Accidental breaking releases","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Do not panic, these things sometimes slip through.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"It is important to fix it as soon as possible, as otherwise people start using the breaking change, and reverting it later causes more problems (c.f. Murphy's law).","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"To fix it:","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Make a PR which reverts the PR that made the breaking change.\nBump the Patch version number in the Project.toml.  The breaking API change was a bug, so a Patch release is correct to fix it.\nMerge the PR and release the new version.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Once the change is reverted, you can take stock and decide what to do. There are generally 2 options:","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Make a new PR to reimplement the feature in a non-breaking way.\nMake a new PR which reverts the reversion, bump the version number to signify it as breaking, and release the new breaking version.","category":"page"},{"location":"#**Example**","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Example","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Consider a package which is currently on v1.14.2. I made a PR to add a new feature and tagged release v1.15.0. The next evening, we get bug reports that the new feature actually broke lots of real uses.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Maybe I changed what I thought was an internal function, but one that was actually part of the public API; maybe I accidentally changed the return type, and that was something people depended on. Whatever it was, I broke it, and this was not caught in code review.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"To fix it, I revert the change, and then tag release v1.15.1. Hopefully, I can also add a test to prevent that part of the API from being broken by mistake.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Now I look at my change again. If I can add the same functionality in a non-breaking way - for example, make a new internal function for my use - then I would do so and tag v1.15.2 or v1.16.0 depending on what had to change.Bu If I cannot make an equivalent non-breaking change, then I would have to make the breaking change and tag v2.0.0.","category":"page"},{"location":"#Accidental-support-for-an-unsupported-dependency","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Accidental support for an unsupported dependency","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Say you were updating PackageA to support a new version of a dependency, PackageB. For example, you want PackageA v1.1.0 to support PackageB v0.5 and to discontinue supporting v0.4. But say you forgot to remove the compatibility for v0.4, which now no longer works, but other downstream packages that only use v0.4 are now pulling in PackageA v1.1.0 and getting errors.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Simply releasing a patch for PackageA (v1.1.1) that removes support for v0.4 won't work in this instance because downstream packages will continue to pull in v1.1.0. It might seem sufficient to just pin the downstream packages to use v1.0.0, but there may be a lot of them to fix, and you can't be certain you're aware of them all. It also does nothing to prevent new compatibility issues from arising in the future.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"To fix this, you should still release a patch of PackageA (v1.1.1) that removes support for v0.4 of PackageB, but you should then mark v1.1.0 of PackageA as broken in the registry. To do this, simply make a PR to the registry, adding yanked = true to the Version.toml file under the version causing issues (in this case v1.1.0). This marks the release as broken and prevents it from being used by any package from then on.","category":"page"},{"location":"#Guidance-on-automatically-enforcing-guidelines","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Guidance on automatically enforcing guidelines","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Many of these guidelines can and should be enforced automatically.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"GitHub: Defining the mergeability of pull requests\nBitbucket: Suggest or require checks before a merge\nGitLab: Status checks that are required to allow a merge requested [WIP]","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"","category":"page"},{"location":"#Changes-that-are-not-considered-breaking","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Changes that are not considered breaking","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Everything on this list can, in theory, break users' code. See XKCD#1172. However, we consider changes to these things to be non-breaking from the perspective of package versioning.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Bugs: We may make backwards incompatible behavior changes if the current implementation is clearly broken, that is, if it contradicts the documentation or if a well-understood behavior is not properly implemented due to a bug.\nInternal changes: Non-public API may be changed or removed.   The public API is defined as all exported symbols, plus any unexported symbols that are explicitly documented as part of the public API, for instance, documented as part of standard usage in the README or hosted documentation.\nException behavior:\nExceptions may be replaced with non-error behavior.\nFor instance, we may change a function to compute a result instead of raising an exception, even if that error is documented.\nError message text may change.\nException types may change unless the exception type for a specific error condition is specified in the documentation.\nFloating-point numerical details: The specific floating-point values may change at any time.   Users should rely only on approximate accuracy, numerical stability, or statistical properties, not on the specific bits computed.\nNew exports: Adding a new export is never considered breaking.   However, one should consider carefully before exporting a commonly used name that might clash with an existing name (especially, if clashing with Base).\nNew supertypes:\nA new supertype may be added to an existing hierarchy.\nThat is, changing A <: B to A <: B <: C or A <: C <: B.   This includes adding a supertype to something without one, i.e. with supertype Any.\nA Union constant may be replaced by an abstract type that covers all elements of the union.\nChanges to the string representation: The output of print/string or show/repr on a type may change at any time.   Users should not depend on the exact text, but rather on the meaning of the text.   Changing the string representation often breaks downstream packages tests, because it is hard to write test-cases that depend only on meaning (though unit tests with mocking can be shielded from this kind of breaking).","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"(This guidance on non-breaking changes is inspired by https://www.tensorflow.org/guide/versions.)","category":"page"},{"location":"#Appendix:","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Appendix:","text":"","category":"section"},{"location":"#Marking-a-Repository-as-following-ColPrac:","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"Marking a Repository as following ColPrac:","text":"","category":"section"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"As mentioned at the top, community repositories following ColPrac, should link to it in their README.md. One way to do that is with a GitHub badge.","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"(Image: ColPrac: Contributor's Guide on Collaborative Practices for Community Packages)","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"[![ColPrac: Contributor's Guide on Collaborative Practices for Community Packages](https://img.shields.io/badge/ColPrac-Contributor's%20Guide-blueviolet)](https://github.com/SciML/ColPrac)","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"Typically, ColPrac serves in places of a CONTRIBUTING.md, having all the common guidance that you would otherwise put there. If your package has its own CONTRIBUTING.md, then you should also link to ColPrac there, and indicate how the content of ColPrac relates to the CONTRIBUTING.md. For example, by stating:","category":"page"},{"location":"","page":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","title":"ColPrac: Contributor's Guide on Collaborative Practices for Community Packages","text":"We follow the ColPrac guide for collaborative practices. New contributors should make sure to read that guide. Below are some additional practices we follow.","category":"page"}]
}
