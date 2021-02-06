# Amazon Linux 2 Setting

1. [install zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#centosrhel)

	```bash
	sudo yum update && sudo yum -y install zsh git vim
	```

2. [install oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

	```bash
	sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
	```

3. set no autoindent for paste

	```bash
	sudo vi /etc/vimrc
		#add at bottom
		set paste
	
	sudo vi /etc/zshrc
		#add at bottom
		alias vi=vim
	```

4. Set main shell from bash to zsh

	```bash
	sudo vi /etc/passwd
	  # FROM..
	  ec2-user:x:1000:1000:EC2 Default User:/home/ec2-user:/bin/bash
	  # TO..
	  ec2-user:x:1000:1000:EC2 Default User:/home/ec2-user:/bin/zsh
	```
	
5. Set zsh plugins and theme

	- [install Auto suggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)

		```bash
		git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
		```

	- [install Auto Completions](https://github.com/zsh-users/zsh-completions#oh-my-zsh)

		```bash
		git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions
		```

	- [edit zshrc]
	
		```bash
		source ~/.zshrc
		```
	
		```plain text
		ZSH_THEME="mortalscumbag"
		...
		plugins=(
			git
			zsh-autosuggestions
			zsh-completions
		)
		ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=#ffd700"
		autoload -U compinit && compinit
		```
		
		```bash
		source ~/.zshrc
		```
		
6. Set hostname

	```bash
	# Check current hostname
	hostnamectl
	
	# Set
	sudo hostnamectl set-hostname sponge-jl.dev
	sudo vi /etc/hosts
	
	  #FROM..
	  127.0.0.1   localhost (..) localhost4.localdomain4
	  #TO..
	  127.0.0.1   localhost (..) localhost4.localdomain4 sponge-jl.dev
	
	# Re-access with SSH
	```

7. [install nvm](https://github.com/nvm-sh/nvm#install--update-script)

	```bash
	# install
	wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
	wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | zsh
	source ~/.zshrc
	
	# check nvm
	nvm --version
	
	# install node
	nvm install v14.15.4
	
	# check node
	node --version
	```
8. [git config](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%B5%9C%EC%B4%88-%EC%84%A4%EC%A0%95)

	```bash
	# set
	git config --global user.name "SPONGE-JL"
	git config --global user.email dev2sponge@gmail.com
	git config --global core.editor vim
	git config --global core.autocrlf input
	git config --global help.autocorrect 1
	git config --global color.ui auto

	# check
	git config --list

	# git log beautify | https://stackoverflow.com/a/9074343
	vi ~/.gitconfig
	
	[alias]
	lg1 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
	lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
	lg = !"git lg1"
	```

9. [install git-flow](https://github.com/nvie/gitflow/wiki/Linux#other-linuxes)

	```bash
	curl -OL https://raw.github.com/nvie/gitflow/develop/contrib/gitflow-installer.sh
	chmod +x gitflow-installer.sh
	sudo ./gitflow-installer.sh
	rm gitflow-installer.sh
	```

