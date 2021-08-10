#NoEnv
SendMode Input
SetWorkingDir %A_ScriptDir%
IfWinExist, ProBot - Discord Multipurpose bot
winActivate, ProBot - Discord Multipurpose bot
IfWinExist, Discord
winActivate, Discord
Send,{Tab}
Sleep, 25
Send, {Enter}