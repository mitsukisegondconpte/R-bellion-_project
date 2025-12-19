# Déploiement Netlify - LE SANG DE LA RÉBELLION

## Instructions de Déploiement

### Étape 1: Préparer les variables d'environnement
Créez un fichier `.env` à la racine du projet avec:
```
DATABASE_URL=votre_url_neon_database_ici
SESSION_SECRET=votre_secret_session_ici
```

### Étape 2: Déployer sur Netlify
1. Pusher le code sur GitHub: `git push origin main`
2. Allez sur https://netlify.com
3. Cliquez "New site from Git"
4. Connectez votre repo GitHub
5. Configuration Build:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Allez dans Settings > Environment et ajoutez:
   - DATABASE_URL
   - SESSION_SECRET
7. Déployez!

### Étape 3: Fichiers importants
- `netlify.toml` - Configuration Netlify (déjà incluse)
- `package.json` - Dépendances
- `dist/` - Build de production (généré par `npm run build`)

### Notes
- Le site utilise une base de données Neon PostgreSQL
- La session est stockée en mémoire (pour production, utilisez une base de données)
- Le password est: `S2rebelle`
- Les modifications en direct sur Netlify: préférez déployer via Git push

## Support
Pour plus d'info: https://docs.netlify.com/
