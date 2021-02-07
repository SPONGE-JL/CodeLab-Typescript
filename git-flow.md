# How to use 'Git Flow'

Example: [GitHub git flow](https://guides.github.com/introduction/flow/)

## Install

Previous using git flow, [install](https://github.com/nvie/gitflow/wiki/Installation) first.

## Init git-glow

```bash
git flow init
```

## Basic `feature` from `develop`

### start to develop one feature

```bash
# **develop** branch > **feature** branch
git flow feature start {FeatureName}
```

### Finished to develop the feature

```bash
# **feature** branch > **develop** branch
# must do in feature/{FeatureName}
git flow feature finish {FeatureName}
```
