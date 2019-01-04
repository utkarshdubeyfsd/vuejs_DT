// Assuming you have already done "npm install fernet"
let fernet = require('fernet')
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let massage = 'gAAAAABcDrx2KRxw6kfdiYvP1H6BiH_CUoJ-ak992HDwfECi4XQLZeqPOJGhngvl_VTf8uxReR2ErUHkSowDp9iCc7qZw96UWGOm9MPpgck2QCH23WjJEUdfv1Ip6lXRqNAHI-2JlLRnenxhMqyURALESixzYCnj6Tmnlnizpl6neP3oQB4rek15Lxv-DyrqVqvKlKDnN7CZ'
//let token = new fernet.Token({secret: saccharine, token: message, ttl:0})
let token = new fernet.Token({secret: secret, token: massage, ttl:0})
console.log(token.decode())