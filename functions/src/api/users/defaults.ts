
export const userConfigDefaults: UserConfig = {
    isDarkMode: false
}

export const userPreferenceDefaults: UserPreference = {
    requirements: []
}

export const userTierDefaults: UserTier = {
    tier: 'Free'
}

export const userDefaults = (
    identifier: string,
    username: string,
    first_name: string,
    last_name: string
): User => {
    return {
        identifier,
        username,
        first_name,
        last_name,
        joined: new Date().toISOString(),
        config: userConfigDefaults,
        userTier: userTierDefaults,
        preferences: userPreferenceDefaults
    }    
}