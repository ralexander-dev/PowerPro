
# PowerPro

## Contributing

1. Fork the repository (Creating a copy of the repo under your GitHub account):
    - Click the **Fork** button.
2. Clone the repository under your account on your local machine.

  ```bash
  git clone <repository-url>

3. Make code changes
4. Commit your changes.
    - Stage changes locally:

      ```bash
      git add .

    - Commit changes:

      ```bash
      git commit -m "Descriptive message"

    - Push local changes to GitHub:

      ``` bash
      git push origin <branch-name>

5. Create a Pull Request:
    - In the browser, navigate to the original repository on GitHub.
    - Click `Pull Requests`
    - Click `New Pull Request`
    - Fill in the PR title and description explaining your work.

## Keeping Your Fork Updated

1. Navigate to your forked repository in the command line:

  ```bash
  cd <repository-name>

2. Configure the upstream repository reference:

  ```bash
  git remote add upstream <original-repository-url>

3. Fetch updates from the upstream repository:

  ```bash
  git fetch upstream

4. Merge changes from upstream repository into your fork.

    ```bash
    git checkout <branch-name>
    git merge upstream/main
