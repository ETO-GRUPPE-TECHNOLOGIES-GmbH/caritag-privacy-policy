# Project Name

A dynamic GitHub Pages project with multilanguage support and integrated Policy Vault API for terms of use.

## Features

- 🌐 Multilanguage Support (EN/DE)
- 📜 Dynamic Terms of Use via Policy Vault API
- 📱 Responsive Design

## Language Support

The application supports multiple languages through the `lang` parameter. Currently supported languages:

- English (EN)
- German (DE)

### Usage

Add the `lang` parameter to the URL to switch languages:

https://your-github-pages-url/?lang=en // English version
https://your-github-pages-url/?lang=de  // German version

If no language parameter is provided, the application defaults to English.

## Terms of Use

The terms of use are dynamically fetched from the Policy Vault API, ensuring that users always see the most up-to-date version of the policies. The content updates automatically when changes are made in the Policy Vault system.

## Development


### Installation

1. Clone the repository:

```bash
git clone https://github.com/username/project-name.git```



## Configuration

Create a `.env` file in the root directory with the following variables:

```env
POLICY_VAULT_ENDPOINT=https://consent-development.farmunited.com/api
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
