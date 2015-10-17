<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DogBreedSelect.aspx.cs" Inherits="AnimalReUnite._Default" %>


<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
        <label for="email">You may have a cross breed so you can select more than one breed</label>
    <div ng-app="myApp" ng-controller="InstantSearchController">
	<div class="bar">
		<!-- Create a binding between the searchString model and the text field -->
		<input type="text" ng-model="searchString" placeholder="Enter your search terms" />
	</div>
        <table>
            <tr ng-repeat="x in names | searchFor:searchString">
                <td> <input type="checkbox" name="dogbreed" value="{{ x.DogBreedID }}" ng-model="master"></td>
                <td>&nbsp;{{ x.Dogbreedname }}</td>
                <td>
                    <img src="http://www.ecare4me.com/otherimg/{{ x.DogbreedImageName }}" height="40"/></td>
            </tr>
        </table>
    </div>

 
    <div class="form-group">
        <label for="comment">Any distinct features:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>


</asp:Content>
