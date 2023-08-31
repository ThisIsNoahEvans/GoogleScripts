#### This script will delete all local users except for the admin account, the default Windows accounts,
#### and the account used for GCPW to function (gaia).

## If MDM is configured through GCPW, make sure you add an exception for the user that enrolled the device.
## Otherwise their account will be deleted, and MDM will be unenrolled.

####### Hastily written and barely tested, but tested in production! Use at your own risk. #######

$users = Get-WmiObject Win32_UserAccount | Where-Object { $_.LocalAccount -eq $true -and $_.Name -ne 'admin'  -and  $_.Name -ne 'DefaultAccount' -and  $_.Name -ne 'gaia' -and  $_.Name -ne 'Guest' -and  $_.Name -ne 'Administrator' -and  $_.Name -ne 'WDAGUtilityAccount'}

foreach ($user in $users) {
    $username = $user.Name
    Write-Host 'Deleting user' $username
    Remove-LocalUser -Name $username
    Start-Sleep -Seconds 2
    Write-Host 'Deleting folder' $username
    Get-CimInstance -Class Win32_UserProfile | Where-Object { $_.LocalPath.split('\')[-1] -eq $username } | Remove-CimInstance
}

Write-Host "Done!"