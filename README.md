### start 
```
npm run start -- --username=your_username
```
### exit

```
ctrl + c or .exit
```

### Navigation & working directory 
Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
```
up
```
Go to dedicated folder from current directory 

```
cd path_to_directory
```
Print in console list of all files and folders in current directory

```
ls
```

## Basic operations with files

#### read
```
cat path_to_file
```
#### create
```
add new_file_name
```
#### Rename file 
```
rn path_to_file new_filename
```
#### Copy file
```
cp path_to_file path_to_new_directory
```
#### Move file 
```
mv path_to_file path_to_new_directory
```
#### Delete file
```
rm path_to_file
```

#### Hash calculation
````
hash path_to_file
````
## Operating system info 

#### Get EOL 
```
os --EOL
```
#### Get host machine CPUs info
```
os --cpus
```
#### Get home directory 
```
os --homedir
```
#### Get current system user name 
```
os --username
```

#### Get CPU architecture 
```
os --architecture
```

## Compress and decompress operations (don't forget .br format on compressed file)
#### Compress file
```
compress path_to_file path_to_destination
```
#### Decompress file
```
decompress path_to_file path_to_destination
```

