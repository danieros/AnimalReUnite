﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AnimalsUniteAPI.Models
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="petsunited")]
	public partial class PetsDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    #endregion
		
		public PetsDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["InvesigateConnectionString"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public PetsDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PetsDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PetsDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public PetsDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_getdogbreed")]
		public ISingleResult<sp_getdogbreedResult> sp_getdogbreed([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(100)")] string keyword)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), keyword);
			return ((ISingleResult<sp_getdogbreedResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_GetregisteredPets")]
		public ISingleResult<sp_GetregisteredPetsResult> sp_GetregisteredPets([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> memberid)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), memberid);
			return ((ISingleResult<sp_GetregisteredPetsResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_login")]
		public ISingleResult<sp_loginResult> sp_login([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(100)")] string username, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(100)")] string password)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), username, password);
			return ((ISingleResult<sp_loginResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_GetregisteredPetDetails")]
		public ISingleResult<sp_GetregisteredPetDetailsResult> sp_GetregisteredPetDetails([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> memberid, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string dogname)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), memberid, dogname);
			return ((ISingleResult<sp_GetregisteredPetDetailsResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_InsertFeatures")]
		public int sp_InsertFeatures([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(50)")] string color, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> height, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> weight, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> hairlength, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string previousname, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string name, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string breed, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> animaltypeid, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> memberid)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), color, height, weight, hairlength, previousname, name, breed, animaltypeid, memberid);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_InsertUniqueFeatures")]
		public int sp_InsertUniqueFeatures([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> animalid, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(MAX)")] string feature)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), animalid, feature);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_GetUniqueFeatures")]
		public ISingleResult<sp_GetUniqueFeaturesResult> sp_GetUniqueFeatures([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> animalid)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), animalid);
			return ((ISingleResult<sp_GetUniqueFeaturesResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_getSPCA")]
		public ISingleResult<sp_getSPCAResult> sp_getSPCA()
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())));
			return ((ISingleResult<sp_getSPCAResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_getSPCA_single")]
		public ISingleResult<sp_getSPCA_singleResult> sp_getSPCA_single([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> spcaid)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), spcaid);
			return ((ISingleResult<sp_getSPCA_singleResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_registeruser")]
		public ISingleResult<sp_registeruserResult> sp_registeruser([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string email, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string username, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string password)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), email, username, password);
			return ((ISingleResult<sp_registeruserResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_GetHeroes")]
		public ISingleResult<sp_GetHeroesResult> sp_GetHeroes()
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())));
			return ((ISingleResult<sp_GetHeroesResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_InsertMessages")]
		public int sp_InsertMessages([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string nameofuser, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string email, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(MAX)")] string message)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), nameofuser, email, message);
			return ((int)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_InsertDiary")]
		public ISingleResult<sp_InsertDiaryResult> sp_InsertDiary([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> memberid, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string name, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(MAX)")] string diaryentry)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), memberid, name, diaryentry);
			return ((ISingleResult<sp_InsertDiaryResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_DeleteDiary")]
		public ISingleResult<sp_DeleteDiaryResult> sp_DeleteDiary([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> diaryid)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), diaryid);
			return ((ISingleResult<sp_DeleteDiaryResult>)(result.ReturnValue));
		}
		
		[global::System.Data.Linq.Mapping.FunctionAttribute(Name="dbo.sp_GetDiary")]
		public ISingleResult<sp_GetDiaryResult> sp_GetDiary([global::System.Data.Linq.Mapping.ParameterAttribute(DbType="Int")] System.Nullable<int> memberid, [global::System.Data.Linq.Mapping.ParameterAttribute(DbType="VarChar(200)")] string name)
		{
			IExecuteResult result = this.ExecuteMethodCall(this, ((MethodInfo)(MethodInfo.GetCurrentMethod())), memberid, name);
			return ((ISingleResult<sp_GetDiaryResult>)(result.ReturnValue));
		}
	}
	
	public partial class sp_getdogbreedResult
	{
		
		private int _DogBreedID;
		
		private string _Dogbreedname;
		
		private string _DogbreedImageName;
		
		private string _Description;
		
		public sp_getdogbreedResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DogBreedID", DbType="Int NOT NULL")]
		public int DogBreedID
		{
			get
			{
				return this._DogBreedID;
			}
			set
			{
				if ((this._DogBreedID != value))
				{
					this._DogBreedID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Dogbreedname", DbType="VarChar(200) NOT NULL", CanBeNull=false)]
		public string Dogbreedname
		{
			get
			{
				return this._Dogbreedname;
			}
			set
			{
				if ((this._Dogbreedname != value))
				{
					this._Dogbreedname = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DogbreedImageName", DbType="VarChar(200) NOT NULL", CanBeNull=false)]
		public string DogbreedImageName
		{
			get
			{
				return this._DogbreedImageName;
			}
			set
			{
				if ((this._DogbreedImageName != value))
				{
					this._DogbreedImageName = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Description", DbType="VarChar(MAX)")]
		public string Description
		{
			get
			{
				return this._Description;
			}
			set
			{
				if ((this._Description != value))
				{
					this._Description = value;
				}
			}
		}
	}
	
	public partial class sp_GetregisteredPetsResult
	{
		
		private int _AnimalID;
		
		private int _AnimalTypeID;
		
		private int _MemberID;
		
		private int _AnimalTypeID1;
		
		private string _Description;
		
		private int _FeatureID;
		
		private int _AnimalID1;
		
		private string _Color;
		
		private System.Nullable<int> _Height;
		
		private System.Nullable<int> _Weight;
		
		private System.Nullable<int> _HairLength;
		
		private string _NameOfDog;
		
		private string _DistinctFeatures;
		
		private string _Breed;
		
		public sp_GetregisteredPetsResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID", DbType="Int NOT NULL")]
		public int AnimalID
		{
			get
			{
				return this._AnimalID;
			}
			set
			{
				if ((this._AnimalID != value))
				{
					this._AnimalID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalTypeID", DbType="Int NOT NULL")]
		public int AnimalTypeID
		{
			get
			{
				return this._AnimalTypeID;
			}
			set
			{
				if ((this._AnimalTypeID != value))
				{
					this._AnimalTypeID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MemberID", DbType="Int NOT NULL")]
		public int MemberID
		{
			get
			{
				return this._MemberID;
			}
			set
			{
				if ((this._MemberID != value))
				{
					this._MemberID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalTypeID1", DbType="Int NOT NULL")]
		public int AnimalTypeID1
		{
			get
			{
				return this._AnimalTypeID1;
			}
			set
			{
				if ((this._AnimalTypeID1 != value))
				{
					this._AnimalTypeID1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Description", DbType="VarChar(200) NOT NULL", CanBeNull=false)]
		public string Description
		{
			get
			{
				return this._Description;
			}
			set
			{
				if ((this._Description != value))
				{
					this._Description = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_FeatureID", DbType="Int NOT NULL")]
		public int FeatureID
		{
			get
			{
				return this._FeatureID;
			}
			set
			{
				if ((this._FeatureID != value))
				{
					this._FeatureID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID1", DbType="Int NOT NULL")]
		public int AnimalID1
		{
			get
			{
				return this._AnimalID1;
			}
			set
			{
				if ((this._AnimalID1 != value))
				{
					this._AnimalID1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Color", DbType="NVarChar(50)")]
		public string Color
		{
			get
			{
				return this._Color;
			}
			set
			{
				if ((this._Color != value))
				{
					this._Color = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Height", DbType="Int")]
		public System.Nullable<int> Height
		{
			get
			{
				return this._Height;
			}
			set
			{
				if ((this._Height != value))
				{
					this._Height = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Weight", DbType="Int")]
		public System.Nullable<int> Weight
		{
			get
			{
				return this._Weight;
			}
			set
			{
				if ((this._Weight != value))
				{
					this._Weight = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_HairLength", DbType="Int")]
		public System.Nullable<int> HairLength
		{
			get
			{
				return this._HairLength;
			}
			set
			{
				if ((this._HairLength != value))
				{
					this._HairLength = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NameOfDog", DbType="VarChar(200)")]
		public string NameOfDog
		{
			get
			{
				return this._NameOfDog;
			}
			set
			{
				if ((this._NameOfDog != value))
				{
					this._NameOfDog = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DistinctFeatures", DbType="VarChar(MAX)")]
		public string DistinctFeatures
		{
			get
			{
				return this._DistinctFeatures;
			}
			set
			{
				if ((this._DistinctFeatures != value))
				{
					this._DistinctFeatures = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Breed", DbType="VarChar(200)")]
		public string Breed
		{
			get
			{
				return this._Breed;
			}
			set
			{
				if ((this._Breed != value))
				{
					this._Breed = value;
				}
			}
		}
	}
	
	public partial class sp_loginResult
	{
		
		private int _memberid;
		
		public sp_loginResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_memberid", DbType="Int NOT NULL")]
		public int memberid
		{
			get
			{
				return this._memberid;
			}
			set
			{
				if ((this._memberid != value))
				{
					this._memberid = value;
				}
			}
		}
	}
	
	public partial class sp_GetregisteredPetDetailsResult
	{
		
		private int _AnimalID;
		
		private int _AnimalTypeID;
		
		private int _MemberID;
		
		private int _AnimalTypeID1;
		
		private string _Description;
		
		private int _FeatureID;
		
		private int _AnimalID1;
		
		private string _Color;
		
		private System.Nullable<int> _Height;
		
		private System.Nullable<int> _Weight;
		
		private System.Nullable<int> _HairLength;
		
		private string _NameOfDog;
		
		private string _Breed;
		
		public sp_GetregisteredPetDetailsResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID", DbType="Int NOT NULL")]
		public int AnimalID
		{
			get
			{
				return this._AnimalID;
			}
			set
			{
				if ((this._AnimalID != value))
				{
					this._AnimalID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalTypeID", DbType="Int NOT NULL")]
		public int AnimalTypeID
		{
			get
			{
				return this._AnimalTypeID;
			}
			set
			{
				if ((this._AnimalTypeID != value))
				{
					this._AnimalTypeID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MemberID", DbType="Int NOT NULL")]
		public int MemberID
		{
			get
			{
				return this._MemberID;
			}
			set
			{
				if ((this._MemberID != value))
				{
					this._MemberID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalTypeID1", DbType="Int NOT NULL")]
		public int AnimalTypeID1
		{
			get
			{
				return this._AnimalTypeID1;
			}
			set
			{
				if ((this._AnimalTypeID1 != value))
				{
					this._AnimalTypeID1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Description", DbType="VarChar(200) NOT NULL", CanBeNull=false)]
		public string Description
		{
			get
			{
				return this._Description;
			}
			set
			{
				if ((this._Description != value))
				{
					this._Description = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_FeatureID", DbType="Int NOT NULL")]
		public int FeatureID
		{
			get
			{
				return this._FeatureID;
			}
			set
			{
				if ((this._FeatureID != value))
				{
					this._FeatureID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID1", DbType="Int NOT NULL")]
		public int AnimalID1
		{
			get
			{
				return this._AnimalID1;
			}
			set
			{
				if ((this._AnimalID1 != value))
				{
					this._AnimalID1 = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Color", DbType="NVarChar(50)")]
		public string Color
		{
			get
			{
				return this._Color;
			}
			set
			{
				if ((this._Color != value))
				{
					this._Color = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Height", DbType="Int")]
		public System.Nullable<int> Height
		{
			get
			{
				return this._Height;
			}
			set
			{
				if ((this._Height != value))
				{
					this._Height = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Weight", DbType="Int")]
		public System.Nullable<int> Weight
		{
			get
			{
				return this._Weight;
			}
			set
			{
				if ((this._Weight != value))
				{
					this._Weight = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_HairLength", DbType="Int")]
		public System.Nullable<int> HairLength
		{
			get
			{
				return this._HairLength;
			}
			set
			{
				if ((this._HairLength != value))
				{
					this._HairLength = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NameOfDog", DbType="VarChar(200)")]
		public string NameOfDog
		{
			get
			{
				return this._NameOfDog;
			}
			set
			{
				if ((this._NameOfDog != value))
				{
					this._NameOfDog = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Breed", DbType="VarChar(200)")]
		public string Breed
		{
			get
			{
				return this._Breed;
			}
			set
			{
				if ((this._Breed != value))
				{
					this._Breed = value;
				}
			}
		}
	}
	
	public partial class sp_GetUniqueFeaturesResult
	{
		
		private int _UniqueFeatureID;
		
		private int _AnimalID;
		
		private string _Feature;
		
		public sp_GetUniqueFeaturesResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_UniqueFeatureID", DbType="Int NOT NULL")]
		public int UniqueFeatureID
		{
			get
			{
				return this._UniqueFeatureID;
			}
			set
			{
				if ((this._UniqueFeatureID != value))
				{
					this._UniqueFeatureID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID", DbType="Int NOT NULL")]
		public int AnimalID
		{
			get
			{
				return this._AnimalID;
			}
			set
			{
				if ((this._AnimalID != value))
				{
					this._AnimalID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Feature", DbType="VarChar(500)")]
		public string Feature
		{
			get
			{
				return this._Feature;
			}
			set
			{
				if ((this._Feature != value))
				{
					this._Feature = value;
				}
			}
		}
	}
	
	public partial class sp_getSPCAResult
	{
		
		private int _NSPCAid;
		
		private string _Name;
		
		private string _Office;
		
		private string _Afterhours;
		
		private string _emailaddress;
		
		private string _physicaladdress;
		
		public sp_getSPCAResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NSPCAid", DbType="Int NOT NULL")]
		public int NSPCAid
		{
			get
			{
				return this._NSPCAid;
			}
			set
			{
				if ((this._NSPCAid != value))
				{
					this._NSPCAid = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Name", DbType="VarChar(400) NOT NULL", CanBeNull=false)]
		public string Name
		{
			get
			{
				return this._Name;
			}
			set
			{
				if ((this._Name != value))
				{
					this._Name = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Office", DbType="VarChar(200)")]
		public string Office
		{
			get
			{
				return this._Office;
			}
			set
			{
				if ((this._Office != value))
				{
					this._Office = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Afterhours", DbType="VarChar(200)")]
		public string Afterhours
		{
			get
			{
				return this._Afterhours;
			}
			set
			{
				if ((this._Afterhours != value))
				{
					this._Afterhours = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_emailaddress", DbType="VarChar(200)")]
		public string emailaddress
		{
			get
			{
				return this._emailaddress;
			}
			set
			{
				if ((this._emailaddress != value))
				{
					this._emailaddress = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_physicaladdress", DbType="VarChar(500)")]
		public string physicaladdress
		{
			get
			{
				return this._physicaladdress;
			}
			set
			{
				if ((this._physicaladdress != value))
				{
					this._physicaladdress = value;
				}
			}
		}
	}
	
	public partial class sp_getSPCA_singleResult
	{
		
		private int _NSPCAid;
		
		private string _Name;
		
		private string _Office;
		
		private string _Afterhours;
		
		private string _emailaddress;
		
		private string _physicaladdress;
		
		public sp_getSPCA_singleResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NSPCAid", DbType="Int NOT NULL")]
		public int NSPCAid
		{
			get
			{
				return this._NSPCAid;
			}
			set
			{
				if ((this._NSPCAid != value))
				{
					this._NSPCAid = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Name", DbType="VarChar(400) NOT NULL", CanBeNull=false)]
		public string Name
		{
			get
			{
				return this._Name;
			}
			set
			{
				if ((this._Name != value))
				{
					this._Name = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Office", DbType="VarChar(200)")]
		public string Office
		{
			get
			{
				return this._Office;
			}
			set
			{
				if ((this._Office != value))
				{
					this._Office = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Afterhours", DbType="VarChar(200)")]
		public string Afterhours
		{
			get
			{
				return this._Afterhours;
			}
			set
			{
				if ((this._Afterhours != value))
				{
					this._Afterhours = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_emailaddress", DbType="VarChar(200)")]
		public string emailaddress
		{
			get
			{
				return this._emailaddress;
			}
			set
			{
				if ((this._emailaddress != value))
				{
					this._emailaddress = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_physicaladdress", DbType="VarChar(500)")]
		public string physicaladdress
		{
			get
			{
				return this._physicaladdress;
			}
			set
			{
				if ((this._physicaladdress != value))
				{
					this._physicaladdress = value;
				}
			}
		}
	}
	
	public partial class sp_registeruserResult
	{
		
		private string _mymessage;
		
		private System.Nullable<int> _memberid;
		
		public sp_registeruserResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_mymessage", DbType="VarChar(500)")]
		public string mymessage
		{
			get
			{
				return this._mymessage;
			}
			set
			{
				if ((this._mymessage != value))
				{
					this._mymessage = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_memberid", DbType="Int")]
		public System.Nullable<int> memberid
		{
			get
			{
				return this._memberid;
			}
			set
			{
				if ((this._memberid != value))
				{
					this._memberid = value;
				}
			}
		}
	}
	
	public partial class sp_GetHeroesResult
	{
		
		private int _MemberID;
		
		private string _Username;
		
		private string _Cellphone;
		
		private System.DateTime _DateInserted;
		
		private System.Nullable<bool> _Paid;
		
		private System.Nullable<int> _Stars;
		
		private string _Reason;
		
		private System.Nullable<System.DateTime> _LastFeautured;
		
		private string _ReasonforFeature;
		
		public sp_GetHeroesResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_MemberID", DbType="Int NOT NULL")]
		public int MemberID
		{
			get
			{
				return this._MemberID;
			}
			set
			{
				if ((this._MemberID != value))
				{
					this._MemberID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Username", DbType="VarChar(200)")]
		public string Username
		{
			get
			{
				return this._Username;
			}
			set
			{
				if ((this._Username != value))
				{
					this._Username = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Cellphone", DbType="VarChar(50)")]
		public string Cellphone
		{
			get
			{
				return this._Cellphone;
			}
			set
			{
				if ((this._Cellphone != value))
				{
					this._Cellphone = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DateInserted", DbType="DateTime NOT NULL")]
		public System.DateTime DateInserted
		{
			get
			{
				return this._DateInserted;
			}
			set
			{
				if ((this._DateInserted != value))
				{
					this._DateInserted = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Paid", DbType="Bit")]
		public System.Nullable<bool> Paid
		{
			get
			{
				return this._Paid;
			}
			set
			{
				if ((this._Paid != value))
				{
					this._Paid = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Stars", DbType="Int")]
		public System.Nullable<int> Stars
		{
			get
			{
				return this._Stars;
			}
			set
			{
				if ((this._Stars != value))
				{
					this._Stars = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Reason", DbType="VarChar(MAX)")]
		public string Reason
		{
			get
			{
				return this._Reason;
			}
			set
			{
				if ((this._Reason != value))
				{
					this._Reason = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_LastFeautured", DbType="DateTime")]
		public System.Nullable<System.DateTime> LastFeautured
		{
			get
			{
				return this._LastFeautured;
			}
			set
			{
				if ((this._LastFeautured != value))
				{
					this._LastFeautured = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReasonforFeature", DbType="VarChar(MAX)")]
		public string ReasonforFeature
		{
			get
			{
				return this._ReasonforFeature;
			}
			set
			{
				if ((this._ReasonforFeature != value))
				{
					this._ReasonforFeature = value;
				}
			}
		}
	}
	
	public partial class sp_InsertDiaryResult
	{
		
		private System.Nullable<int> _mycounter;
		
		public sp_InsertDiaryResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_mycounter", DbType="Int")]
		public System.Nullable<int> mycounter
		{
			get
			{
				return this._mycounter;
			}
			set
			{
				if ((this._mycounter != value))
				{
					this._mycounter = value;
				}
			}
		}
	}
	
	public partial class sp_DeleteDiaryResult
	{
		
		private System.Nullable<int> _mycounter;
		
		public sp_DeleteDiaryResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_mycounter", DbType="Int")]
		public System.Nullable<int> mycounter
		{
			get
			{
				return this._mycounter;
			}
			set
			{
				if ((this._mycounter != value))
				{
					this._mycounter = value;
				}
			}
		}
	}
	
	public partial class sp_GetDiaryResult
	{
		
		private int _DiaryID;
		
		private int _AnimalID;
		
		private string _DiaryEntry;
		
		private string _mydateinserted;
		
		public sp_GetDiaryResult()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DiaryID", DbType="Int NOT NULL")]
		public int DiaryID
		{
			get
			{
				return this._DiaryID;
			}
			set
			{
				if ((this._DiaryID != value))
				{
					this._DiaryID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_AnimalID", DbType="Int NOT NULL")]
		public int AnimalID
		{
			get
			{
				return this._AnimalID;
			}
			set
			{
				if ((this._AnimalID != value))
				{
					this._AnimalID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DiaryEntry", DbType="VarChar(MAX) NOT NULL", CanBeNull=false)]
		public string DiaryEntry
		{
			get
			{
				return this._DiaryEntry;
			}
			set
			{
				if ((this._DiaryEntry != value))
				{
					this._DiaryEntry = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_mydateinserted", DbType="VarChar(11)")]
		public string mydateinserted
		{
			get
			{
				return this._mydateinserted;
			}
			set
			{
				if ((this._mydateinserted != value))
				{
					this._mydateinserted = value;
				}
			}
		}
	}
}
#pragma warning restore 1591
